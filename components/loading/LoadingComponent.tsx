import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="spinner-box">
        <div className="leo-border-1">
          <div className="leo-core-1"></div>
        </div>
        <div className="leo-border-2">
          <div className="leo-core-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
