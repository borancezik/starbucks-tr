import React from "react";

const GreenButton = ({ title }) => {
  return (
    <button className="h-8 px-4 rounded-full text-white bg-salem hover:bg-salem-hover">
      {title}
    </button>
  );
};

export default GreenButton;
