import { useTranslation } from "react-i18next";
import Header from "../components/Header";

export default function Train() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className="w-full h-[618px] bg-darkBlue fixed top-[96px] flex justify-center items-center flex-col">
        <p className="text-[white] text-[42px] fixed top-[199px]">
          {t("trainPageTrainText")}
        </p>
        <p className="text-lightYellow text-2xl fixed top-[276px]">
          {t("trainPageClickText")}
        </p>
        <div className="flex gap-[128px] top-[370px] fixed">
          <p className="text-lightYellow text-2xl">
            {t("trainPageGeoLangText")}
          </p>
          <p className="text-footerText text-2xl">
            {t("trainPageEngLangText")}
          </p>
        </div>
        <button className="text-[white] bg-green p-2.5 rounded-[30px] w-[294px] h-[47px] fixed top-[456px]">
          {t("trainPageStartTrainBNText")}
        </button>
      </div>
    </div>
  );
}
