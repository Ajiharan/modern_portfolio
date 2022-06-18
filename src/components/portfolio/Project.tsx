import React from "react";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

type IProject = {
  name: string;
  desc: string;
  tech: any[];
  github?: string;
  link?: string;
};

const Project: React.FC<IProject> = (props: IProject) => {
  return (
    <motion.div
      {...useScroll("flipInX")}
      initial="hidden"
      variants={{
        visible: { opacity: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0 },
      }}
    >
      <div className="project">
        <header>
          <svg
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#23ce6b "
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="project-links">
            <a href={props?.github} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://joaotuliojt.github.io/dv-musica-library-page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={externalLinkIcon} alt="Visitar site" />
            </a>
          </div>
        </header>
        <div className="body">
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {props.tech.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </footer>
      </div>
    </motion.div>
  );
};

export default Project;
