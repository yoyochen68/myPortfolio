import { Link } from 'react-router-dom'
import projectsData from './projectsData'
import Header from './components/Header'
import Footer from './components/Footer'

const Projects = () => {

    return (
        <>

            <Header />
            <div className="projects">
                <div className='starysky'>
                    <span></span>

                </div>
                <section className="projectsSection">
                    <p>Featured Projects</p>
                    <div className='projectsInfo'>
                        {projectsData.map((project) => {
                            return (
                                <div key={project.id} className='projectBox'>
                                    <h2>{project.title}</h2>
                                    <Link to={`/projects/${project.id}`} >
                                        <img src={project.logo} alt={project.title} className='projectLogo' />
                                    </Link>
                                    <p className='projectIntroduction'>{project.introduction}</p>

                                </div>
                            )
                        })}
                    </div>
                    <div className='space'></div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Projects