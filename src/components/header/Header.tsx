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
        <a
          href="https://firebasestorage.googleapis.com/v0/b/thurkastores.appspot.com/o/Ajiharan_%20Baskaran__SE.pdf?alt=media&token=f98f5c34-6490-4217-a771-d5c1193cba73"
          className="button"
          target="_blank"
          rel="noreferrer noopener"
        >
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
