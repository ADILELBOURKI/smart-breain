import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageInput from "./components/image-input/ImageInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageInput />
      {/*  <FaceRecognition />  */}
    </div>
  );
}

export default App;
