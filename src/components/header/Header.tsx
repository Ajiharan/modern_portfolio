import React, { useState } from "react";
import HeaderContainer from "components/header/headerStyle";
import { HashLink, NavHashLink } from "core/components";

const Header = () => {
  const [hasSidepanel, setSidePanel] = useState<boolean>(false);

  const closeMenu = () => {
    setSidePanel(false);
  };

  const toggleMode = () => {
    const html = document.querySelector("html");
    console.log("html", html);
  };

  return (
    <HeaderContainer className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>B </span>
        <span>Ajiharan</span>
      </HashLink>
      <input
        onChange={toggleMode}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={hasSidepanel ? "active" : ""}>
        <NavHashLink smooth to="/#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
          Portfolio
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href="" download className="button">
          Resume
        </a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
