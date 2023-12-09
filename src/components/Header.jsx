import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangsBN from "./LangsBN";
import ThemeBN from "./ThemeBN";
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
      path: "/2323",
    },
    {
      id: 4,
      name: `${t("allCardsText")}`,
      path: "/343",
    },
    {
      id: 5,
      name: `${t("trainText")}`,
      path: "/long545man",
    },
    {
      id: 6,
      name: `${t("myProgressText")}`,
      path: "/long5451man",
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
            <ThemeBN />
            <LangsBN />
          </div>
        </div>
      </div>
    </header>
  );
}
