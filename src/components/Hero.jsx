import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="py-[70px] bg-darkBlue dark:bg-[#000]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h1 className="mt-[50px] mb-[37px] text-[#fff] text-[42px] font-bold font-helvetica font-case">
                {t("createCardText")}
              </h1>
              <p className="text-lightYellow text-xl font-bold">
                {t("enjoyLearnText")}
              </p>
              <button
                className="mt-[75px] bg-[#1ACD81] hover:bg-[#0fa968] text-darkBlue font-bold rounded-[30px] w-[294px] h-[47px]  p-[10px] gap-[10px]"
                onClick={() => alert("შექმენი ახალი ქარდი")}
              >
                {t("startText")}
              </button>
            </div>
            <div>
              <div className="w-[533px] h-[408px] rounded-lg bg-lightBlue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
