import classNames from "classnames";
import React from "react";

const GreenButton = ({ title, reverseCss }) => {
  return (
    <button
      className={classNames({
        "h-8 px-4 rounded-full ": true,
        "text-white bg-salem hover:bg-salem-hover": !reverseCss,
        "text-salem bg-white border-salem border-2 hover:bg-gray-300":
          reverseCss,
      })}
    >
      {title}
    </button>
  );
};

export default GreenButton;
