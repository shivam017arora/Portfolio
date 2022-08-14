import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/Shivam017arora" target="blank">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/shivam017arora/" target="blank">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://github.com/shivam017arora/" target="blank">
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
