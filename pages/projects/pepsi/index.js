import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import FormComponent from "../../../components/FormComponent";
import Footer from "../../../components/Footer";
import {randomIntFromInterval} from "../../../tools";
import Slider from "react-slick";
import AOS from "aos";
import 'aos/dist/aos.css';

const Pepsi = () => {
    const [number, setNumber] = useState(randomIntFromInterval(0, 2));

    useEffect(() => {
        AOS.init({
            duration:2000
        });
        if (document.getElementById("scroll-element")){
            document.getElementById("scroll-element").style.display = "block";
        }
        return () => {
            document.getElementById("scroll-element").style.display = "none"
        }
    }, [])

    const projects = [
        {
            img: "/assets/images/khan.png",
            link: "/projects/khan-academy"
        },
        {
            img: "/assets/images/social.png",
            link: "/projects/social"
        },
        {
            img: "/assets/images/icar.png",
            link: "/projects/i-cars"
        }
    ]

    const settings = {
        // className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoPlay: true,
        autoplaySpeed: 3000,
        centerPadding: 0,
        centerMode: false,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className="projects-page pepsi" id="main" data-scroll-section>
            <header>
                <Navbar/>
            </header>
            <div className="page-title" data-aos="fade-up">
                <h3 className="font-montserrat-extra-bold">Pepsi Co - Beverage company</h3>
            </div>

            <div className="container">
                <h1 className="font-neue-machina-regular" data-aos="fade-up">
                    Experience the world's
                    best drink
                </h1>

                <div className="info-content">
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold" data-aos="fade-up">Authentic Brand
                            Engagement</h4>
                    </div>
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold" data-aos="fade-up">AN ORIGINAL PROJECT
                            FOR PEPSI</h4>
                    </div>
                    <div className="info-content-item" data-aos="fade-up">
                        <p>
                            Pepsi is an iconic brand known around the world for its loved drinks. It was a privilege for us to work with Pepsi on a project to establish an online presence and improve brand recognition. Our team employed unique design
                            and marketing strategies to provide Pepsi with the best potential outcome in all aspects. The results were excellent, and we are pleased to have aided in the expansion of such a respectable company.
                        </p>
                    </div>
                </div>

                <div className="video-content" data-aos="fade-up">
                    <video autoPlay muted loop playsInline>
                        <source src="/assets/video/pepsi.mp4" type="video/mp4"/>
                    </video>
                    {/*<div></div>*/}
                </div>

            </div>
            <p className="video-info-text" data-aos="fade-up">
                Through targeted advertising and carefully crafted messaging, we were able to increase brand awareness and online traffic for Pepsi.
            </p>

            <div className="container" data-aos="fade-up">
                <div className="carousel-content-wrap">
                    <h5 className="carousel-text font-montserrat-bold">
                        MOBILE VIEW
                    </h5>
                    <div className="car-content">
                        <Slider {...settings}>
                            <div className="car-content-item">
                                <img src="/assets/images/pepsi-car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/pepsi-car2.png" alt="car1"/>
                            </div>
                            {/*<div className="car-content-item">*/}
                            {/*    <img src="/assets/images/car3.png" alt="car1"/>*/}
                            {/*</div>*/}
                            <div className="car-content-item">
                                <img src="/assets/images/pepsi-car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/pepsi-car2.png" alt="car1"/>
                            </div>
                            {/*<div className="car-content-item">*/}
                            {/*    <img src="/assets/images/car3.png" alt="car1"/>*/}
                            {/*</div>*/}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="info-text-content">
                    <h2 className="font-montserrat-extra-bold" data-aos="fade-up">
                        ARE YOU READY TO IGNITE YOUR BRAND’S FULL POTENTIAL?
                    </h2>
                    <h3 className="font-montserrat-semi-bold" data-aos="fade-up">Let’s work together</h3>
                </div>
                <h4 className="more-text" data-aos="fade-up">More Projects</h4>
                <div className="project-content">
                    {projects.map((item, index) => {
                        return index != number ?
                            <Link href={item.link}><img src={item.img} alt="khan"/></Link>
                            : ""
                    })}
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