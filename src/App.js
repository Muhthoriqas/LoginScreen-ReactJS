import "./App.css";
import "./style/login.css";
import Login from "./components/Login";
import Labelss from "./components/Labels";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div>
        <Login />
      </div>
      <div>
        <Labelss />
      </div>
    </Fragment>
  );
}

export default App;
