import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <section className="homeSection">
          <p className="introText">
            Hello! <br />
            I am Yoyo Chen <br />A Full Stack Web Developer{" "}
          </p>
          <p className="desText">
            I’m passionate about pushing the boundaries of web development and
            UX/UI design. With a keen eye for detail and a love for innovation,
            I’m eager to leverage my full stack skills to build meaningful and
            impactful solutions.
          </p>
          {/* <p className="desText">
            {" "}
            I am actively seeking opportunities to utilize my full stack web
            development skills to create impactful solutions.
          </p>
          <p className="desText">
            If you have any questions or just want to say hi, feel free to drop
            me a message. My inbox is always open!
            <a href="mailto:yoyochen2019@yahoo.ca?Subject=I%20want%20to%20connect">
              <img
                src="../img/email.png"
                className="siteEmailLogo"
                alt="logo"
              />
            </a>
          </p> */}
        </section>
        <img src="../img/headShot.png" alt="portfolio" className="headshot" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
