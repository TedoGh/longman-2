import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const routerData = [
    {
      id: 1,
      name: `${t("homeText")}`,
      path: "/longman",
    },
    {
      id: 2,
      name: `${t("aboutText")}`,
      path: "/longman/about",
    },
    {
      id: 3,
      name: `${t("addCardText")}`,
      path: "/longman/addcard",
    },
    {
      id: 4,
      name: `${t("allCardsText")}`,
      path: "/longman/cards",
    },
    {
      id: 5,
      name: `${t("trainText")}`,
      path: "/longman/train",
    },
    {
      id: 6,
      name: `${t("myProgressText")}`,
      path: "/longman/progress",
    },
  ];

  return (
    <header className="p-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="max-[1024px]:hidden">
            <ul className="flex gap-8 items-center">
              {routerData.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={`${item.path}`}
                      className={
                        location.pathname === `${item.path}` ? "activeLink" : ""
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex gap-8">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
