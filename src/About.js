import Header from './components/Header'
import Footer from './components/Footer'
import technologies from './technologies'



const About = () => {
    console.log(technologies)

    return (
        <>
            <div className="about">
                <div className='starysky'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Header />
                <section className="aboutSection">
                    <div className="intro">
                        <h1>i am Yoyo Chen  <br/>
                        A Full Stack Web developer  </h1>
                        <div className='aboutMe'>
                        <p>
                            I am driven by a passion for creating engaging and user-friendly web applications that provide seamless experiences for users. With a deep understanding of front-end and back-end technologies, I am skilled in developing responsive and dynamic web interfaces that are optimized for speed and performance.

                        </p>

                        <p>
                            I am committed to staying up-to-date with the latest trends and advancements in web development to ensure that my work is always at the cutting edge.

                        </p>
                        <p>
                            Whether working independently or as part of a team, I thrive in fast-paced, deadline-driven environments and always approach my work with a solutions-oriented mindset. I pride myself on my ability to collaborate with designers, developers, and stakeholders to deliver high-quality web applications that meet the needs of both clients and end-users.
                        </p>
                        <p>
                            Ultimately, my goal as a web developer is to create impactful, innovative solutions that improve the digital landscape and empower users to achieve their goals online.
                        </p>
                        </div>
                    </div>
                    <div className="imgsect">
                        <img src="../img/yoyo.jpg" alt="Yoyo" className="selfImg" />
                        <div >
                            <h2 className='funfactTitle'>Fun Fact</h2>
                            <div className="funfact">
                                I Love 。。。 <br />
                                Coffee and bbt, <br />
                                Animals, rising 2 little cats, <br />
                                Traveling and camping, <br />
                                Sewing and other hand craft, <br />
                                kayaking and paddling, <br />
                                Studying Astronomy, <br />
                                Playing board game and badminton. <br />
                            </div>
                        </div>
                    </div>
                    <div className="techSection">
                        <h2>Skill & Technologies:</h2>
                        <div className='techBox'>
                            {technologies.map((technology) => {
                                return (
                                    <div className="" key={technology.id}>
                                        <img src={technology.logo} alt={technology.name} className='technologyLogo' />
                                        <p>{technology.name}</p>
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

export default About