import React from "react";
import { useParams } from "react-router-dom";

const ProjectItem = () => {
  const { projectname } = useParams();
  return <div>This project is {projectname}</div>;
};

export default ProjectItem;
