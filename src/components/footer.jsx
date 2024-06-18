import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with Love by &copy;Arpit Pandey{" "}
          <a href="https://github.com/Harsh26-code/Path-Finding-visualiser">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/arpit-pandey-240997226/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
