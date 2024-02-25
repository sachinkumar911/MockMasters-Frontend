import React from "react";

const ProgressReport = ({side}) => {
  return (
    <>
      <h1 className={`flex justify-center items-center h-[90vh] text-3xl ${side ? "lg:blur-none blur-sm" : " "}`}>
        Feature Coming Really Soon...
      </h1>
    </>
  );
};

export default ProgressReport;
