import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App_pseudoSelector";

// 각 props마다 모드를 다르게 해주고 싶다면, 각 변수가 갖는 프로퍼티의 이름이 같아야 한다!
// 즉, darkTheme.textColor = lightTeme.textColor 이런식으로...

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
