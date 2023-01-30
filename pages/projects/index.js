import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Link from "next/link";
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";
import AOS from "aos";
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration:2000
        });
        document.getElementById("scroll-element").style.display = "block"
        return () => {
            document.getElementById("scroll-element").style.display = "none"
        }
    }, [])
    return (
        <div className="projects-page">
            <header>
                <Navbar/>
            </header>


            <div className="page-title">
                <h3 className="font-montserrat-extra-bold" data-aos="fade-up">Icars. Car retail service</h3>
            </div>

            <div className="container">
                <h1 className="font-neue-machina-regular" data-aos="fade-up">Drive Your
                    Dream.</h1>

                <div className="info-content">
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold" data-aos="fade-up">Authentic Brand Engagement</h4>
                    </div>
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold" data-aos="fade-up">AN ORIGINAL PROJECT FOR ICARS</h4>
                    </div>
                    <div className="info-content-item" data-aos="fade-up">
                        <p>
                            When icars approached our agency to help them create an online platform for their auto reselling business, we were eager to take on the job. Users can post and sell their own vehicles on the website in addition to
                            accessing exclusive and comprehensive information about the numerous vehicles that are available for purchase. To offer a risk-free and secure shopping experience for all users, we also adopted special security measures.
                            We're ecstatic to have contributed to providing vehicle enthusiasts with this exciting platform.
                        </p>
                    </div>
                </div>

                <div className="video-content" data-aos="fade-up">
                    <div></div>
                </div>

            </div>
            <p className="video-info-text" data-aos="fade-up">Our team utilized NodeJS and Python to create a custom website that perfectly captures the essence of icars identity and leadership in their industry. The design elements were carefully crafted to align with the brand's values and
                set them apart from the competition.</p>

            <div className="container" data-aos="fade-up">
                <h5 className="carousel-text font-montserrat-bold">
                    MOBILE VIEW
                </h5>
            </div>
            <div className="car-content" data-aos="fade-up">
                <img src="/assets/images/car1.png" alt="car1"/>
                <img src="/assets/images/car2.png" alt="car1"/>
                <img src="/assets/images/car3.png" alt="car1"/>
            </div>
            <div className="container">
                <div className="info-text-content">
                    <h2 className="font-montserrat-extra-bold" data-aos="fade-up">ARE YOU READY TO IGNITE YOUR BRAND’S FULL POTENTIAL?</h2>
                    <h3 className="font-montserrat-semi-bold" data-aos="fade-up">Let’s work together</h3>
                </div>
                <h4 className="more-text" data-aos="fade-up">More Projects</h4>
                <div className="project-content">
                    <Link href="/project/khan" data-aos="fade-up"><img src="/assets/images/khan.png" alt="khan"/></Link>
                    <Link href="/project/khan" data-aos="fade-up"><img src="/assets/images/social.png" alt="social"/></Link>
                </div>
            </div>
            <div className="form-section">
                <FormComponent/>
            </div>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export default Projects;