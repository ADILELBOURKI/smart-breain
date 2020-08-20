import React from "react";
import "./image-input.css";
const ImageInput = () => {
  return (
    <div>
      <p children="f3">{"This Magic brain will detect faces in pictures !"}</p>
      <div className="center">
        <div className="form">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="w-60 grow f4 link ph3 pv2 dib purple bg-light">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
