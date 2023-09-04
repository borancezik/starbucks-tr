import React from "react";

const PageContainer = ({ children }) => {
  return <div className="flex flex-col w-[60%] bg-white-smoke">{children}</div>;
};

export default PageContainer;
