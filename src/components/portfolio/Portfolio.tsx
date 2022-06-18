import { Container } from "./style";

import Project from "./Project";
const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">
        <Project
          name="Instagram Reels Clone"
          desc="Instagram Reels Clone"
          github="https://github.com/Ajiharan/instagram-reels-clone"
          tech={[
            { id: 1, name: "React" },
            { id: 2, name: "Firebase" },
          ]}
        />
      </div>
    </Container>
  );
};

export default Portfolio;
