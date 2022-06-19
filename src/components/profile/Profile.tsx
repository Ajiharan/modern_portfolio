import { NavHashLink } from "core/components";
import React from "react";
import { motion } from "framer-motion";
import Illustration from "../../assets/illustration.svg";
import Container from "./style";
import useScroll from "hooks/useScroll";

const Profile = () => {
  return (
    <Container id="home">
      <div className="hero-text ">
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 30,
              transition: { duration: 0.2, ease: "easeIn" },
            },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <p>Hello 👋, I'm</p>
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 30,
              transition: { duration: 0.2, ease: "easeIn" },
            },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <h1>Baskaran Ajiharan</h1>
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 30,
              transition: { duration: 0.3, ease: "easeIn" },
            },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <h3>Full stack developer</h3>
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 30,
              transition: { duration: 0.4, ease: "easeIn" },
            },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <p className="small-resume">
            I'm a Software Engineer with a focus on web development with
            JavaScript.
          </p>
        </motion.div>
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 30,
              transition: { duration: 0.6, ease: "easeIn" },
            },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </motion.div>
      </div>
      <div className="hero-image">
        <motion.div
          {...useScroll()}
          initial="hidden"
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img src={Illustration} alt="illustrate" />
        </motion.div>
      </div>
    </Container>
  );
};

export default Profile;
