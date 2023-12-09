import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import moreVertLight from "../assets/images/moreVertLight.svg";
import moreVertDark from "../assets/images/moreVertDark.svg";
import trash from "../assets/images/trash.svg";
import Header from "../components/Header";

const API = "https://dzenebieri-flashcards-api.onrender.com/cards";

export default function AddCard() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    date: "",
    flag: "",
    title: "",
    scores: "",
    english: "",
    georgian: "",
    category: "",
    progress: "",
    notes: "",
  });

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [showBNs, setShowBNs] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.georgian.trim().length <= 1 ||
      formData.english.trim().length <= 1
    ) {
      console.error("Minimum 1 Character");
      return;
    }

    try {
      const response = await fetch(`${API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchCards();
        setFormData({
          date: "",
          flag: "",
          title: "",
          scores: "",
          english: "",
          georgian: "",
          category: "",
          progress: "",
          notes: "",
        });
      } else {
        console.error("Failed to add card");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = (cardId) => {
    setFlippedCards((prevFlippedCards) => {
      if (prevFlippedCards.includes(cardId)) {
        return prevFlippedCards.filter((id) => id !== cardId);
      } else {
        return [...prevFlippedCards, cardId];
      }
    });
  };

  const fetchCards = async () => {
    try {
      const response = await fetch(`${API}`);
      if (response.ok) {
        const data = await response.json();
        setCards(data);
      } else {
        console.error("Failed to get cards");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (cardId) => {
    try {
      const response = await fetch(`${API}/${cardId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchCards();
      } else {
        console.error("Failed to delete card");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <Header />
      <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <form
          onSubmit={handleSubmit}
          className="w-[555px] h-[469px] bg-lightBlue flex flex-col justify-center items-center gap-12 rounded-lg mt-24"
        >
          <input
            type="text"
            name="georgian"
            value={formData.georgian}
            onChange={handleChange}
            placeholder={t("addCardPlaceGeoText")}
            className="rounded-lg border-bgPlaceBorder border-solid border placeholder:text-bgPlaceBorder focus:outline-none focus:border-green w-[455px] p-2"
          />
          <input
            type="text"
            name="english"
            value={formData.english}
            onChange={handleChange}
            placeholder={t("addCardPlaceEngText")}
            className="rounded-lg border-bgPlaceBorder border-solid border placeholder:text-bgPlaceBorder focus:outline-none focus:border-green w-[455px] p-2"
          />
          <button
            type="submit"
            className="p-2 rounded-[30px] w-[455px] bg-bgPlaceBorder text-[white]"
          >
            {t("addCardBNText")}
          </button>
        </form>

        <ul>
          {cards.map((card) => (
            <div key={card.id}>
              <li
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="w-[267px] h-[79px] cursor-pointer"
              >
                <div className="font-bold">
                  {flippedCards.includes(card.id) ? (
                    <div className="text-darkBlue bg-lightYellow w-[267px] h-[79px] flex justify-center items-center rounded-md">
                      <span>{card.georgian}</span>
                      <button
                        onClick={() => {
                          setShowBNs(!showBNs, card.id);
                        }}
                      >
                        <img src={moreVertDark} alt="Buttons Menu" />
                      </button>
                      {showBNs && (
                        <button onClick={() => handleDelete(card.id)}>
                          <img src={trash} alt="Trash" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-[white] bg-green w-[267px] h-[79px] flex justify-center items-center rounded-md">
                      <span>{card.english}</span>
                      <button
                        onClick={() => {
                          setShowBNs(!showBNs, card.id);
                        }}
                      >
                        <img src={moreVertLight} alt="Buttons Menu" />
                      </button>
                      {showBNs && (
                        <button onClick={() => handleDelete(card.id)}>
                          <img src={trash} alt="Trash" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
