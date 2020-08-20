import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageInput from "./components/image-input/ImageInput";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import Clarifai, { COLOR_MODEL } from "clarifai";
import "./App.css";

const API = "bfbdeb9614cc4beabe29f7872f90944a";
const app = new Clarifai.App({
  apiKey: API,
});
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    console.log("click");
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {
        // there was an error
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageInput
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
