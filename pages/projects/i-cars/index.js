import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import FormComponent from "../../../components/FormComponent";
import Footer from "../../../components/Footer";
import Slider from "react-slick";
import {randomIntFromInterval} from "../../../tools";

const ICars = () => {
    const [number, setNumber] = useState(randomIntFromInterval(0, 2));

    useEffect(() => {
        document.getElementById("scroll-element").style.display = "block";
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
            img: "/assets/images/khan.png",
            link: "/projects/khan-academy"
        },
        {
            img: "/assets/images/social.png",
            link: "/projects/social"
        },
        {
            img: "/assets/images/pepsi.png",
            link: "/projects/pepsi"
        }
    ]

    return (
        <div className="projects-page" data-scroll-section>
            <header>
                <Navbar/>
            </header>


            <div className="page-title">
                <h3 className="font-montserrat-extra-bold">Icars. Car retail service</h3>
            </div>

            <div className="container">
                <h1 className="font-neue-machina-regular">Drive Your
                    Dream.</h1>

                <div className="info-content">
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">Authentic Brand Engagement</h4>
                    </div>
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">AN ORIGINAL PROJECT FOR ICARS</h4>
                    </div>
                    <div className="info-content-item">
                        <p>
                            When icars approached our agency to help them create an online platform for their auto reselling business, we were eager to take on the job. Users can post and sell their own vehicles on the website in addition to
                            accessing exclusive and comprehensive information about the numerous vehicles that are available for purchase. To offer a risk-free and secure shopping experience for all users, we also adopted special security measures.
                            We're ecstatic to have contributed to providing vehicle enthusiasts with this exciting platform.
                        </p>
                    </div>
                </div>
                <div className="video-content">
                    <div></div>
                </div>
            </div>
            <p className="video-info-text">Our team utilized NodeJS and Python to create a custom website that perfectly captures the essence of icars identity and leadership in their industry. The design elements were carefully crafted to align with the brand's values and
                set them apart from the competition.</p>

            <div className="container">
                <div className="carousel-content-wrap">
                    <h5 className="carousel-text font-montserrat-bold">
                        MOBILE VIEW
                    </h5>
                    <div className="car-content">
                        <Slider {...settings}>
                            <div className="car-content-item">
                                <img src="/assets/images/car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/car2.png" alt="car1"/>
                            </div>
                            {/*<div className="car-content-item">*/}
                            {/*    <img src="/assets/images/car3.png" alt="car1"/>*/}
                            {/*</div>*/}
                            <div className="car-content-item">
                                <img src="/assets/images/car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/car2.png" alt="car1"/>
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
                    <h2 className="font-montserrat-extra-bold">ARE YOU READY TO IGNITE YOUR BRAND’S FULL POTENTIAL?</h2>
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

export default ICars;