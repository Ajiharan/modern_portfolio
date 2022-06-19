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
import TextAnimation from "./TextAnimation";
import IconAnimation from "./IconAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <TextAnimation duration={0.4} element={<h2>About me</h2>} />
        <TextAnimation
          duration={0.5}
          element={
            <p>
              My name is Baskaran Ajiharan I'm a Full stack developer in
              Srilanka☀️. I describe myself as a passionate developer who loves
              coding, open source, and the web and mobile platform
            </p>
          }
        />
        <TextAnimation
          duration={0.55}
          element={
            <p>
              Aside from my job, I like to create and contribute to open source
              projects.
            </p>
          }
        />
        <TextAnimation
          duration={0.6}
          element={
            <p>
              That helps me to learn a ton of new stuff, grow as a developer and
              support other open source projects.
            </p>
          }
        />
        <TextAnimation
          duration={0.65}
          element={<h3>Here are my main skills:</h3>}
        />

        <div className="hard-skills">
          <IconAnimation duration={0.1} icon={reactIcon} />
          <IconAnimation duration={0.2} icon={vueIcon} />
          <IconAnimation duration={0.3} icon={nodeIcon} />
          <IconAnimation duration={0.4} icon={cssIcon} />
          <IconAnimation duration={0.5} icon={htmlIcon} />
          <IconAnimation duration={0.6} icon={typescriptIcon} />
          <IconAnimation duration={0.7} icon={jsIcon} />
          <IconAnimation duration={0.8} icon={angularIcon} />
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
