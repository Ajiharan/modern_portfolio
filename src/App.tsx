import React from "react";
import "./App.css";
import GlobalStyle from "styles/global";
import Header from "components/header/Header";
import Main from "components/main/Main";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
