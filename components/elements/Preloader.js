import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute inset-y-2/4 jump center">
            <img
              src={"/assets/imgs/logos/prototypenextlogo.png"}
              alt="Prototype.NEXT Logo"
            />
            <h1 className="text-lg font-semibold">Prototype.NEXT </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
