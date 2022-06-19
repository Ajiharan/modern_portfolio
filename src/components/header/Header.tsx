import React, { useState } from "react";
import HeaderContainer from "components/header/headerStyle";
import { HashLink, NavHashLink } from "core/components";

const Header = () => {
  const [hasSidepanel, setSidePanel] = useState<boolean>(false);

  const closeMenu = () => {
    setSidePanel(false);
  };

  const toggleMode = () => {
    let html = document.querySelector<HTMLElement>("html");
    html?.classList.toggle("light");
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
      <div
        aria-expanded={hasSidepanel ? "true" : "false"}
        aria-haspopup="true"
        aria-label={hasSidepanel ? "short menu" : "long menu"}
        className={hasSidepanel ? "menu active" : "menu"}
        onClick={() => {
          setSidePanel(!hasSidepanel);
        }}
      ></div>
    </HeaderContainer>
  );
};

export default Header;
