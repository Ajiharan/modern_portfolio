import { NavHashLink } from "core/components";
import React from "react";
import { motion } from "framer-motion";
import Illustration from "../../assets/illustration.svg";
import Container from "./style";
import useScroll from "hooks/useScroll";

const Profile = () => {
  return (
    <Container id="home">
      <motion.div className="hero-text " {...useScroll()} initial="hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <p>Hello 👋, I'm</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ ease: "easeIn", duration: 0.25 }}
        >
          <h1>Baskaran Ajiharan</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ ease: "easeIn", duration: 0.4 }}
        >
          <h3>Full stack developer</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ ease: "easeIn", duration: 0.6 }}
        >
          <p className="small-resume">
            I'm a Software Engineer with a focus on web development with
            JavaScript.
          </p>
        </motion.div>
        <motion.div
          style={{ height: "100px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
        >
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </motion.div>
      </motion.div>
      <div className="hero-image">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img src={Illustration} alt="Ilustração" />
        </motion.div>
      </div>
    </Container>
  );
};

export default Profile;
