import React from "react";

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className="center ma ">
      <img className="absolute mt2" src={imgUrl} width="500px" height="auto" />
    </div>
  );
};

export default FaceRecognition;
