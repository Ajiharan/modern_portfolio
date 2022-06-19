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
            src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/276002728_4868966156557520_2088393938092186695_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=5yHXEBi4DdwAX_sU9gT&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT9f7dgF_5W1XkFmuqww6ulfpbqWO4vNnV8ze5jLOn_7Sg&oe=62B46C16"
            alt="profile"
          />
        </motion.div>
      </div>
    </Container>
  );
}