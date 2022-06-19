import { Container } from "./style";
import { motion } from "framer-motion";
import cssIcon from "assets/css-icon.svg";
import htmlIcon from "assets/html-icon.svg";
import jsIcon from "assets/js-icon.svg";
import nodeIcon from "assets/node-icon.svg";
import reactIcon from "assets/react-icon.svg";
import typescriptIcon from "assets/typescript-icon.svg";
import vueIcon from "assets/vue-icon.svg";
import angularIcon from "assets/angular-icon.svg";
import useScroll from "hooks/useScroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <h2>About me</h2>
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <p>
            My name is Baskaran Ajiharan I'm a Full stack developer in
            Srilanka☀️. I describe myself as a passionate developer who loves
            coding, open source, and the web and mobile platform
          </p>
          <br />
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <p>
            Aside from my job, I like to create and contribute to open source
            projects.
          </p>
          <br />
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <p>
            That helps me to learn a ton of new stuff, grow as a developer and
            support other open source projects.
          </p>
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <h3>Here are my main skills:</h3>
        </motion.div>
        <div className="hard-skills">
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={reactIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={vueIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={nodeIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={cssIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={htmlIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={typescriptIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={jsIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              {...useScroll()}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <img src={angularIcon} alt="React" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img
            src="https://media-exp1.licdn.com/dms/image/D5603AQEgMkt9JJmUwA/profile-displayphoto-shrink_800_800/0/1641133581415?e=1660780800&v=beta&t=kQhE04QgjzjE3Pl5OCsFTkFpWenxAhFPjFgspJ-mx7U"
            alt="Imagem de perfil"
          />
        </motion.div>
      </div>
    </Container>
  );
}
