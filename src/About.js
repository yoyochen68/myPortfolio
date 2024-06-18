import Header from "./components/Header";
import Footer from "./components/Footer";
import technologies from "./technologies";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <section className="aboutSection">
          <div className="intro">
            <h1>Passionate Web Developer Crafting Seamless Experiences </h1>
            <div className="aboutMe">
              <p>
                I am driven by a passion for creating engaging and user-friendly
                web applications that provide seamless experiences for users.
                With a deep understanding of front-end and back-end
                technologies, I am skilled in developing responsive and dynamic
                web interfaces that are optimized for speed and performance.
              </p>

              <p>
                I am committed to staying up-to-date with the latest trends and
                advancements in web development to ensure that my work is always
                at the cutting edge.
              </p>
              <p>
                Whether working independently or as part of a team, I thrive in
                fast-paced, deadline-driven environments and always approach my
                work with a solutions-oriented mindset. I pride myself on my
                ability to collaborate with designers, developers, and
                stakeholders to deliver high-quality web applications that meet
                the needs of both clients and end-users.
              </p>
              <p>
                Ultimately, my goal as a web developer is to create impactful,
                innovative solutions that improve the digital landscape and
                empower users to achieve their goals online.
              </p>
            </div>
          </div>
          <div className="imgsect">
            <div>
              <h2 className="funfactTitle">Fun Fact</h2>
              <div className="funfact">
                Coffee and bubble tea enthusiast
                <br />
                Proud parent of two adorable cats
                <br />
                Love traveling and camping
                <br />
                Skilled in sewing and handcrafts
                <br />
                Avid kayaker and paddler
                <br />
                Fascinated by astronomy
                <br />
                Enjoy playing board games and badminton
                <br />
                Experienced gentle skydiving in Hawaii
                <br />
                Witnessed the Aurora Borealis in Yellowknife
                <br />
              </div>
            </div>
            <img src="../img/yoyoandcat.png" alt="Yoyo" className="selfImg" />
          </div>
          <h2 className="skillTitle">Skills & Technologies:</h2>
          <div className="techSection">
            <div className="techBox">
              {technologies.map((technology) => {
                return (
                  <div className="" key={technology.id}>
                    <img
                      src={technology.logo}
                      alt={technology.name}
                      className="technologyLogo"
                    />
                    <p>{technology.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space"></div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
