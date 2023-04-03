import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <div className="home">
        <div class="sky">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        <Header />
        <section className='homeSection'>
          <p className='introText'>Hello! <br />
            i am Yoyo Chen <br />
            i am a full stack web developer </p>
          <p className='desText'> I thrive on exploring the infinite possibilities of Web Development and UX/UI Design </p>
          <p className='desText'> I am actively seeking opportunities to utilize my full stack web development skills to create impactful solutions.
          </p>
          <p className='desText'>If you have any questions or just want to say hi, feel free to drop me a message. My inbox is always open!<a href="mailto:yoyochen2019@yahoo.ca?Subject=I%20want%20to%20connect"><img src="../img/email.png" className="siteEmailLogo" alt="logo" /></a></p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
