import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageInput from "./components/image-input/ImageInput";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import Register from "./components/register/Register";
import SignIn from "./components/sign-in/SignIn";
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
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }
  onRouteChange = (route) => {
    if (this.state.route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (this.state.route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(`${width} and ${height}`);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - clarifaiFace.bottom_row * height,
      rightRow: width - clarifaiFace.right_col * width,
    };
  };
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    console.log("click");
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => Error(err));
  };
  render() {
    return (
      <div className="App">
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <ImageInput
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl} />
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
