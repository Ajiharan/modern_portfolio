import { Container } from "./style";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

const Footer = () => {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>B </span>
        <span>Ajiharan</span>
      </a>
      <div>
        <p>@copyright 2022</p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ajiharan-baskaran-6a8b77170/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/Ajiharan" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
