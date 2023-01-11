import React, {useEffect} from 'react';
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import FormComponent from "../../../components/FormComponent";
import Footer from "../../../components/Footer";

const Pepsi = () => {

    useEffect(() => {
        document.getElementById("scroll-element").style.display = "block"
        return () => {
            document.getElementById("scroll-element").style.display = "none"
        }
    }, [])
    return (
        <div className="projects-page pepsi" id="main" data-scroll-section>
            <header>
                <Navbar/>
            </header>
            <div className="page-title">
                <h3 className="font-montserrat-extra-bold">Pepsi Co - Beverage company</h3>
            </div>

            <div className="container">
                <h1 className="font-neue-machina-regular">
                    Experience the world's
                    best drink
                </h1>

                <div className="info-content">
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">Authentic Brand
                            Engagement</h4>
                    </div>
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">AN ORIGINAL PROJECT
                            FOR PEPSI</h4>
                    </div>
                    <div className="info-content-item">
                        <p>
                            Pepsi is an iconic brand known around the world for its loved drinks. It was a privilege for us to work with Pepsi on a project to establish an online presence and improve brand recognition. Our team employed unique design
                            and marketing strategies to provide Pepsi with the best potential outcome in all aspects. The results were excellent, and we are pleased to have aided in the expansion of such a respectable company.
                        </p>
                    </div>
                </div>

                <div className="video-content">
                    <div></div>
                </div>

            </div>
            <p className="video-info-text">
                Through targeted advertising and carefully crafted messaging, we were able to increase brand awareness and online traffic for Pepsi.
            </p>

            <div className="container">
                <h5 className="carousel-text font-montserrat-bold">
                    MOBILE VIEW
                </h5>
            </div>
            <div className="car-content">
                <img src="/assets/images/pepsi-car1.png" alt="car1"/>
                <img src="/assets/images/pepsi-car2.png" alt="car1"/>
                <img src="/assets/images/pepsi-car3.png" alt="car1"/>
            </div>
            <div className="container">
                <div className="info-text-content">
                    <h2 className="font-montserrat-extra-bold">
                        ARE YOU READY TO IGNITE YOUR BRAND’S FULL POTENTIAL?
                    </h2>
                    <h3 className="font-montserrat-semi-bold">Let’s work together</h3>
                </div>
                <h4 className="more-text">More Projects</h4>
                <div className="project-content">
                    <Link href="/projects/khan-academy"><img src="/assets/images/khan.png" alt="khan"/></Link>
                    <Link href="/projects/i-cars"><img src="/assets/images/icar.png" alt="social"/></Link>
                </div>
            </div>
            <div className="form-section" id="js-target">
                <FormComponent/>
            </div>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export default Pepsi