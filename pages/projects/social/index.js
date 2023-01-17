import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import FormComponent from "../../../components/FormComponent";
import Footer from "../../../components/Footer";
import {randomIntFromInterval} from "../../../tools";
import Slider from "react-slick";

const Social = () => {
    const [number, setNumber] = useState(randomIntFromInterval(0, 2));

    useEffect(() => {
        document.getElementById("scroll-element").style.display = "block"
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
            img: "/assets/images/pepsi.png",
            link: "/projects/pepsi"
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
        <div className="projects-page social" data-scroll-section>
            <header>
                <Navbar/>
            </header>


            <div className="page-title">
                <h3 className="font-montserrat-extra-bold">Slyde App - Social Media Platform </h3>
            </div>

            <div className="container">
                <h1 className="font-neue-machina-regular">Feel the vibe
                    with others.</h1>

                <div className="info-content">
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">Authentic Brand
                            Engagement</h4>
                    </div>
                    <div className="info-content-item">
                        <h4 className="font-montserrat-bold">AN ORIGINAL PROJECT FOR Slyde </h4>
                    </div>
                    <div className="info-content-item">
                        <p>
                            When Slyde approached us for assistance with their app development needs, they presented us with a clear vision for how they wanted to make socializing easier for young people. We were eager to take on the challenge and
                            proposed a tailored solution to the problem. The resulting app includes payment integration, friend-adding, location tracking, and more features. To ensure that the design was visually appealing as well as user-friendly,
                            our team conducted extensive research and went above and beyond to create a truly unique and functional platform.
                        </p>
                    </div>
                </div>

                <div className="video-content">
                    <div></div>
                </div>

            </div>
            <p className="video-info-text">
                To complete this project, our team used a variety of tools and technologies, including Figma, Photoshop, and Blender for UI/UX design and C++, NodeJS, Python, and C# for code. The end result was a smooth and user-friendly platform
                that exceeded our client's expectations.
            </p>

            <div className="container">
                <div className="carousel-content-wrap">
                    <h5 className="carousel-text font-montserrat-bold">
                        MOBILE VIEW
                    </h5>
                    <div className="car-content">
                        <Slider {...settings}>
                            <div className="car-content-item">
                                <img src="/assets/images/social-car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/social-car2.png" alt="car1"/>
                            </div>
                            {/*<div className="car-content-item">*/}
                            {/*    <img src="/assets/images/car3.png" alt="car1"/>*/}
                            {/*</div>*/}
                            <div className="car-content-item">
                                <img src="/assets/images/social-car1.png" alt="car1"/>
                            </div>
                            <div className="car-content-item">
                                <img src="/assets/images/social-car2.png" alt="car1"/>
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
                        ARE YOU READY TO IGNITE YOUR BRAND’S FULL POTENTIAL?
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

export default Social