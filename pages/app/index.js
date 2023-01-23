import React, {useEffect, useState} from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";
import AppHeader from "../../components/AppHeader";
import Link from "next/link";
import Layer from "../../components/Layer";

function Index(props) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

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
    }
    return (
        <div className="app-page" data-scroll-section>
            <AppHeader/>
            <div className="title-section">
                <h1 className={'font-montserrat-extra-bold'}>
                    We execute proven strategies
                    to come up with the best solution</h1>
            </div>
            <div className="section-one">
                <div className="parent-box">
                    <div className="box">
                        <div className="title font-neue-machina-bold">
                            01
                        </div>
                        <div className="text font-poppins-regular">
                            DISCOVERING YOUR NEEDS
                            We spend the time necessary to completely comprehend your needs and objectives before
                            beginning any app development project. This entails performing market research and
                            competitive landscape analysis. Additionally, in order to provide the ideal solution for
                            your company, we make sure we understand and record your preferences for design and
                            branding.
                        </div>
                    </div>
                    <div className="box">
                        <div className="title font-neue-machina-bold text-second">
                            02
                        </div>
                        <div className="text font-poppins-regular ">
                            PLANNING AND RESEARCHING
                            From the very beginning, we strive to gather as much information as possible to understand
                            your needs and goals. Our experts then use this information to conduct thorough research and
                            propose a customized plan and scope of work for your project. By researching
                            industry-leading practices and thoroughly analyzing your unique goals, we are able to
                            deliver a proposal that is truly tailored to your needs.
                        </div>
                    </div>
                    <div className="box">
                        <div className="title font-neue-machina-bold text-third">
                            03
                        </div>
                        <div className="text font-poppins-regular ">
                            DEVELOPMENT & TESTING
                            As soon as you approve our proof-of-concept, our skilled team of developers will get to work
                            bringing your project to life. We keep you updated on progress at least twice a week, and
                            with our team's dedication and hard work, most projects are completed within a few months.
                            Believe in us to efficiently and effectively bring your vision to fruition.
                        </div>
                    </div>
                </div>
                <button className={'font-montserrat-bold'}>
                    <Link href={'#js-target'}>Place an order</Link>
                </button>
            </div>
            <div className="section-two">
                <h1 className={'font-montserrat-extra-bold'}>
                    We guarantee technical quality
                </h1>
            </div>
            <div className="section-three">
                <img className="mobile-iphone-img" src="/assets/home/iphone.png" alt=""/>
                <div className="box">
                    <div className="title font-montserrat-bold">
                        Slyde App
                    </div>
                    <div className="text-left font-poppins-regular">
                        Slyde is a revolutionary startup that keeps you in the know about all the hottest events
                        happening in cities across the nation

                    </div>
                    <div className="text-right font-poppins-regular">
                        For this project, our development process was expertly crafted to deliver exceptional results.
                        We ensured the technical aspects were beautifully aligned with the proposed design. The end
                        result was a highly optimized and successful site.
                    </div>
                </div>
            </div>
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