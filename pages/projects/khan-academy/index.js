import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import FormComponent from "../../../components/FormComponent";
import Footer from "../../../components/Footer";
import Slider from "react-slick";
import {randomIntFromInterval} from "../../../tools";

const Khan = () => {
    const [number, setNumber] = useState(randomIntFromInterval(0, 2));

    useEffect(() => {
        document.getElementById("scroll-element").style.display = "block"
        return () => {
            document.getElementById("scroll-element").style.display = "none"
        }
    }, [])

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

    const projects = [
        {
            img: "/assets/images/social.png",
            link: "/projects/social"
        },
        {
            img: "/assets/images/pepsi.png",
            link: "/projects/pepsi"
        },
        {
            img: "/assets/images/icar.png",
            link: "/projects/i-cars"
        }
    ]

    return (
        <div className="projects-page khan" data-scroll-section>
            <header>
                <Navbar/>
            </header>


            <div className="page-title">
                <h3 className="font-montserrat-extra-bold">Khan Academy Education Org</h3>
            </div>

            <div className="container">
                <h1 className="font-neue-machina-regular">Share
                    knowledge.</h1>

                <div className="info-content">
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">Authentic Brand
                            Engagement</h4>
                    </div>
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">AN ORIGINAL PROJECT FOR KHAN
                            ACADEMY </h4>
                    </div>
                    <div className="info-content-item">
                        <p>
                            The chance to collaborate on the prestigious Khan Academy's branding initiatives was an honor for bSigned. The Khan Academy is a non-profit global education organization committed to removing obstacles and giving everyone
                            the opportunity to learn. Our objective was to make the brand stand out and draw in potential contributors and sponsors to aid them with their crucial mission. We were ecstatic to play a role in strengthening the Khan
                            Academy brand and assisting them in achieving their objectives.
                        </p>
                    </div>
                </div>

                <div className="video-content">
                    <div></div>
                </div>

            </div>
            <p className="video-info-text">
                To bring the brand to life, our team drew on their artistic talents and used their drawing and painting skills for this project. The code and design were created from scratch to ensure an original and tailored result. We added local
                architectural elements as an extra touch to honor Uzbekistan's rich culture.
            </p>

            <div className="container">
                <div className="carousel-content-wrap">
                    <h5 className="carousel-text font-montserrat-bold">
                        MOBILE VIEW
                    </h5>
                    <div className="car-content">
                        <Slider {...settings}>
                            <div className="car-content-item">
                                <img src="/assets/images/khan-car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/khan-car2.png" alt="car1"/>
                            </div>
                            {/*<div className="car-content-item">*/}
                            {/*    <img src="/assets/images/car3.png" alt="car1"/>*/}
                            {/*</div>*/}
                            <div className="car-content-item">
                                <img src="/assets/images/khan-car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/khan-car2.png" alt="car1"/>
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
                    <h2 className="font-montserrat-extra-bold">
                        READY TO TAKE YOUR CONCEPT TO THE NEXT LEVEL?
                    </h2>
                    <h3 className="font-montserrat-semi-bold">Let’s work together</h3>
                </div>
                <h4 className="more-text">More Projects</h4>
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

export default Khan;