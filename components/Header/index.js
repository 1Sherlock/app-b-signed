import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Slider from "react-slick";
import { useLocomotiveScroll } from 'react-locomotive-scroll';
const Header = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        setTimeout(() => {
            const dateTemp = new Date()
            setTime(dateTemp.getHours() + ":" + (dateTemp.getMinutes() > 9 ? dateTemp.getMinutes() : "0" + dateTemp.getMinutes()))
            setDate((dateTemp.getDate() > 9 ? dateTemp.getDate() : "0" + dateTemp.getDate()) + "." + ((dateTemp.getMonth() + 1) > 9 ? (dateTemp.getMonth() + 1) : "0" + (dateTemp.getMonth() + 1)) + "." + dateTemp.getFullYear())
        } ,1000)
    }, [date, time])

    const { scroll } = useLocomotiveScroll();

    const toContact = () => {
        const target = document.querySelector('#js-target');

        scroll.scrollTo(target);
    }

    return (
        <div className="main-header">
            <div className="main-header-nav">
                <Link href="/"><img src="/assets/icons/logo.svg" alt="bsigned" className="logo"/></Link>
                <ul>
                    <li><Link href="/web" className="font-inter-regular">Web Development</Link></li>
                    <li><Link href="/app" className="font-inter-regular">App Development</Link></li>
                    <li><Link href="/brand" className="font-inter-regular">Branding</Link></li>
                    <li><Link href="#" className="font-inter-regular" onClick={toContact}>Contact Us</Link></li>
                </ul>
                <a href="tel:+15043335601"><img src="/assets/icons/telephone.svg" alt="telephone"/></a>
            </div>

            <div className="main-header-content">
                <div className="main-header-content-left">
                    <h1 className="font-neue-machina-regular">You Desire</h1>
                    <h1 className="font-neue-machina-regular">We design</h1>
                </div>
                <video autoPlay muted loop playsInline>
                    <source src="/assets/video/shart.mp4" type="video/mp4"/>
                </video>
                <div className="main-header-content-right-wrap">
                    <div className="main-header-content-right">
                        <Slider {...settings}>
                            <div className="header-carousel-item">
                                <p className="font-poppins-regular">
                                    Innovation is at the heart of everything we do. From designing unique experiences, to constantly improving and evolving your online performance - we strive to achieve exceptional results through fresh approaches. Let us guide you on a path to success.
                                </p>
                            </div>
                            <div className="header-carousel-item">
                                <p className="font-poppins-regular">
                                    Experience the power of a recognized, cutting-edge digital marketing agency. Our commitment to innovation and expert execution will elevate your brand.
                                </p>
                            </div>
                            <div className="header-carousel-item">
                                <p className="font-poppins-regular">
                                    Our passion for your brand drives us to achieve excellence every day. Let us bring that same energy and dedication to your project, delivering exceptional results that exceed expectations.
                                </p>
                            </div>
                        </Slider>
                        <h3 className="h3-margin font-neue-machina-ultra-bold">{time}</h3>
                        <h3 className="font-neue-machina-ultra-bold">{date}</h3>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;