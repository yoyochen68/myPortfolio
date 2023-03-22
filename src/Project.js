import { Link, useParams } from "react-router-dom";
import projectsData from "./projectsData";
import Header from "./components/Header";
import Footer from './components/Footer';

const Project = () => {
    const { projectId } = useParams();
    const project = projectsData.find((project) => project.id === projectId);
    const { title, description, gitHubLink, websiteLink, figmaLink, images, imageLanscape, skills } = project;
    return (
        <>
            <div className="singleProject">
                <Header />
                <div className='skyy'>
                    <span></span>
                    <span></span>
       
                </div>
                <section className="singleProjectSection">
                    <div className="projectTitle">
                        {title}
                        <div>
                            {gitHubLink && <a href={gitHubLink}><img src="../img/gitHub.png" className="linklogo" alt="logo" /></a>}
                            {websiteLink && <a href={websiteLink}><img src="../img/Internet.png" className="linklogo" alt="logo" /></a>}
                            {figmaLink && <a href={figmaLink}><img src="../img/figmaLink.png" className="linklogo" alt="logo" /></a>}
                        </div>
                    </div>
                    <div className="signleProjectBox">
                        <div className={imageLanscape}>
                            {images.map((image, index) => {
                                return (
                                    <div key={index} className="imgBox">
                                        <img src={image} alt="webpage" className={imageLanscape + "Img"} />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div>
                            <div className="descriptionBox">
                                {description.map((desc, index) => {
                                    return (
                                        <div key={index} className="description">
                                            <p>{desc}</p>
                                        </div>
                                    )
                                })}
                            </div>



                        </div>

                    </div>
                    <div className="skills">
                        <p className="skillTitle">Skills and Technologies:</p>
                        <div className="skill">
                            {skills.map((skill, index) => {
                                return (
                                    <div key={index} className="skillBox">
                                        <img src={skill.logo} />
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='space'></div>
                </section>

            </div>

            <Footer />
        </>
    )
}

export default Project