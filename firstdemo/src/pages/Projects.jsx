import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      Projects
      {["PROJECT A", "PROJECT B", "PROJECT C"].map((item) => (
        <button>
          <Link to={"/projects/" + item}>{item}</Link>
        </button>
      ))}
    </div>
  );
};

export default Projects;
