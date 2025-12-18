import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectItem = () => {
  const { projectname } = useParams();
  return (
    <div>
      <Header />
      This project is {projectname}
      <Footer />
    </div>
  );
};

export default ProjectItem;
