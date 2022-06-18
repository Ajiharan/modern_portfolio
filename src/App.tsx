import React from "react";
import "./App.css";
import GlobalStyle from "styles/global";
import Header from "components/header/Header";
function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Header />
    </React.Fragment>
  );
}

export default App;
