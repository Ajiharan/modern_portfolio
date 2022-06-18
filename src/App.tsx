import React from "react";
import "./App.css";
import GlobalStyle from "styles/global";
import Header from "components/header/Header";
import Main from "components/main/Main";
function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default App;
