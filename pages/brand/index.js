import React, {useEffect, useState} from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";
import Link from "next/link";
import BranHeader from "../../components/BranHeader";
import Layer from "../../components/Layer";
import AOS from "aos";
import 'aos/dist/aos.css';

function Index(props) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration:2000
        });
        window.addEventListener('scroll', changeScroll)
        return () => {
            window.removeEventListener("scroll", changeScroll)
        }
    }, []);
    const changeScroll = () => {
        const scrollpos = window.scrollY;
        if (scrollpos >= 100) {
            document.getElementById("tap-to").classList.add("scrolled")
        } else {
            document.getElementById("tap-to").classList.remove("scrolled")
        }

        const elements = document.getElementsByClassName("scroll-section-animation");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].getBoundingClientRect().top <= 0){
                console.log(elements[i].getBoundingClientRect())
                const items = document.getElementsByClassName("scroll-section-animation-item");
                for (let j = 0; j < items.length; j++) {
                    const transform = elements[i].getBoundingClientRect().top / elements[i].getBoundingClientRect().height * 100
                    items[i].style.willChange = "transform";
                    items[i].style.transform = "translate3d(0px, "+ transform +"%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
                    items[i].style.transformStyle = "preserve-3d";
                }
            }
        }
    }
    return (
        <div className='brand-page' data-scroll-section>
            <BranHeader/>
            <section style={{position: "relative", zIndex: 0}} id="" className="scroll-section-animation">
                <div className="nimadir brand">
                    <div className="text-effect-sticky-element">
                        <div className="gutter-outside container-w3">
                            <div className="text-effect-inner">
                                <div className="text-effect-gradient scroll-section-animation-item">
                                    <div className="text-overlap-end"></div>
                                </div>
                                <p className="text-effect-text">
                                    Experience the transformative power
                                    of our brand strategy and design thinking services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<div className="section-one">*/}
            {/*    <h1 className="font-montserrat-extra-bold">*/}
            {/*        Experience the transformative power*/}
            {/*        of our brand strategy and design thinking services*/}
            {/*    </h1>*/}
            {/*</div>*/}
            <div className="section-two">
                <div className="parent-box" data-aos="fade-up">
                    <div className="box">
                        <div className="box-left font-neue-machina-regular">01</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                Innovative solutions
                                that drive
                            </div>
                            <div className="text font-poppins-regular">
                                The power of vision allows us to truly understand the limitless potential of your brand.
                                We'll work tirelessly to craft unique and effective strategies that maximize your
                                opportunities and help your brand thrive in a constantly-evolving digital landscape.
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-left font-neue-machina-regular box-left-second">02</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                Uniting your team behind a shared vision
                            </div>
                            <div className="text font-poppins-regular">
                                We specialize in creating cohesive and purposeful teams. By tapping into the core
                                essence of your brand, we can inspire your leadership to work towards a common goal,
                                maximizing productivity and utilizing resources efficiently.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parent-box second-parent-box" data-aos="fade-up">
                    <div className="box">
                        <div className="box-left font-neue-machina-regular box-left-third">03</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                Creating a brand identity to shine
                            </div>
                            <div className="text font-poppins-regular">
                                It's clear that placing your brand at the heart of your business strategy is crucial for
                                success in today's fast-paced and competitive market. That's why we offer expert
                                guidance to help leaders like you develop a modern and brand-centric mindset.
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-left font-neue-machina-regular box-left">04</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                Crafting visually stunning
                                brand experiences
                            </div>
                            <div className="text font-poppins-regular">
                                Successful branding relies on imaginative thinking, strategic planning, and expertly
                                made designs. This is why we include these principles into each and every project we
                                work on to make absolutely sure that our clients stand out in a crowded market and have
                                a meaningful connection with their audience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="brand-section">
                <div className="title font-montserrat-extra-bold" data-aos="fade-up">
                    Brands we worked with
                </div>
                <div className="brand" data-aos="fade-up">
                    <img src="/assets/partner/pepsi.svg" alt=""/>
                    <img src="/assets/partner/khan.svg" alt=""/>
                    <img src="/assets/partner/slyde.svg" alt=""/>
                    <img src="/assets/partner/icars.svg" alt=""/>
                </div>

                <div className="parent-box" data-aos="fade-up">
                    <div className="box">
                        <Link href="/projects/pepsi"><img src="/assets/home/Pepsi.png" alt=""/></Link>
                    </div>
                    <div className="box">
                        <Link href="/projects/i-cars"><img src="/assets/home/Icars.png" alt=""/></Link>
                    </div>
                </div>
                <div className="parent-box" data-aos="fade-up">
                    <div className="box">
                        <Link href="/projects/social"><img src="/assets/home/Slyde.png" alt=""/></Link>
                    </div>
                    <div className="box">
                        <Link href="/projects/khan-academy"><img src="/assets/home/kham1.png" alt=""/></Link>
                    </div>
                </div>
            </section>
            <section style={{position: "relative", zIndex: 0}} id="" className="scroll-section-animation">
                <div className="nimadir brand">
                    <div className="text-effect-sticky-element">
                        <div className="gutter-outside container-w3">
                            <div className="text-effect-inner">
                                <div className="text-effect-gradient scroll-section-animation-item">
                                    <div className="text-overlap-end"></div>
                                </div>
                                <p className="text-effect-text">
                                    Ready to bring your big idea to life?

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<div className="section-three">*/}
            {/*    <h1 className="font-montserrat-extra-bold">*/}
            {/*        Ready to bring your big idea to life?*/}
            {/*    </h1>*/}
            {/*</div>*/}
            <section className="form-section" id="js-target">
                <FormComponent/>
            </section>
            <footer>
                <Footer/>
            </footer>
            <div className="layer-scroll-component" id="tap-to" onClick={() => setIsOpen(true)}>
                <img src="/assets/images/to-to-see.png" alt="tap-to-see"/>
            </div>
            <Layer isOpen={isOpen} toggle={() => {setIsOpen(!isOpen)}}/>
        </div>
    );
}

export default Index;