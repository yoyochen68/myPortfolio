import Header from './components/Header'
import Footer from './components/Footer'


const Contact = () => {

    return (
        <>
            <div className="contact">
                <Header />
                <section className="contactSection">
                    <p className='contactTitle'>Get in Touch</p>
                    <p className='contactText'>
                        I am actively seeking opportunities to utilize my full stack web development skills to create impactful solutions.
                    </p>
                    <p className="contactText" >
                        If you have any questions or just want to say hi, feel free to drop me a message. My inbox is always open!
                    </p>
                    <a href="mailto:yoyochen2019@yahoo.ca?Subject=I%20want%20to%20connect">
                        <button>
                            Let's Chat
                        </button>
                    </a>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Contact