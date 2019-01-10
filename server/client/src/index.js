import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/index.css";
import "./css/w3.css";
import resumeData from "./resumeData.json";
import Info from "./components/Info";
import App from "./components/App";
import Project from "./components/Project";
import registerServiceWorker from "./registerServiceWorker";
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/info" render={() => <Info data={resumeData} />} />
        <Route
          exact
          path="/project"
          render={() => <Project data={resumeData} />}
        />
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
