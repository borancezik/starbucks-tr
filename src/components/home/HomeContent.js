import GreenButton from "components/main/GreenButton";
import React from "react";

const HomeContent = ({ title, detail, buttonTitle, buttonHref, img }) => {
  return (
    <div className="w-full h-[420px] flex flex-row items-center justify-center">
      <img
        className="w-[50%] h-full"
        src={process.env.PUBLIC_URL + `${img}`}
      ></img>
      <div className="flex flex-col w-[50%] gap-y-4 h-full items-start justify-start p-4">
        <p className="font-bold text-2xl">{title}</p>
        <p>{detail}</p>
        <GreenButton title={buttonTitle}></GreenButton>
      </div>
    </div>
  );
};

export default HomeContent;
