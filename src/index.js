import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import Theme from "./Styles/Theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Theme>
      <Routes />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
