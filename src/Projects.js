import { Link } from "react-router-dom";
import projectsData from "./projectsData";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects">
        <section className="projectsSection">
          <p>Featured Projects</p>
          <div className="projectsInfo">
            {projectsData.map((project) => {
              return (
                <>
                  <Link to={`/projects/${project.id}`} className="projectLink">
                    <div key={project.id} className="projectBox">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="projectLogo"
                      />
                      <div className="projectInfo">
                        <h2>{project.title}</h2>
                        <p className="projectIntroduction">
                          {project.introduction}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
          <div className="space"></div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
