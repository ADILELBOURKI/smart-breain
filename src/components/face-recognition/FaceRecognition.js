import React from "react";
import "./face-recog.css";
const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center ma ">
      <img
        id="inputImage"
        className="absolute mt2"
        src={imgUrl}
        width="500px"
        height="auto"
      />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightRow,
          left: box.leftCol,
          bottom: box.bottomRow,
        }}
      ></div>
    </div>
  );
};

export default FaceRecognition;
