import React, {useEffect, useState} from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";
import Modal from "../../components/Modal";
import Example from "../../components/Example";
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
    console.log(props)
    return (
        <div className="home-page">
            <Header/>
            <section className="section-one">
                <h1 className='font-montserrat-extra-bold'>Transform your
                    business with us</h1>
            </section>

            <section className="section-two">
                <div className="parent-box">
                    <div className="box">
                        <div className="title font-montserrat-bold">
                            Fully Remote
                        </div>
                        <div className="text font-poppins-regular">
                            Join the future of work with us. Our commitment to remote processes allows for faster
                            turnaround times and cost savings, all while fostering a sense of community and
                            collaboration among our team. Experience the benefits of a streamlined, efficient process.

                        </div>
                    </div>
                    <div className="box">
                        <div className="title title-pink font-montserrat-bold">
                            Fast
                        </div>
                        <div className="text font-poppins-regular">
                            We understand that time is of the essence when it comes to achieving your business goals.
                            That's why we pride ourselves on our fast, efficient process that delivers results quickly.
                            We use cutting-edge technology and proven project management methods to ensure that we meet
                            your deadlines and exceed expectations.
                        </div>
                    </div>
                </div>
                <div className="parent-box second-parent-box">
                    <div className="box">
                        <div className="title title-pink font-montserrat-bold">
                            Approach
                        </div>
                        <div className="text font-poppins-regular">
                            Get results you can trust with us. Our commitment to excellence is evident in every step of
                            our process, from start to finish. Our focus on attention to detail guarantees that your
                            project will be completed to the highest standards.

                        </div>
                    </div>
                    <div className="box ">
                        <div className="title font-montserrat-bold">
                            Creativity
                        </div>
                        <div className="text font-poppins-regular">
                            Our team of experts are constantly pushing the boundaries and coming up with fresh and
                            innovative ideas to help our clients stand out in their industry. We are dedicated to
                            delivering exceptional results in all that we do - from website design and marketing
                            campaigns to product creation. Choose us for unparalleled success.
                        </div>
                    </div>
                </div>
                <button className={'font-montserrat-bold'}>
                    <Link href={'#js-target'}>Get Started</Link>
                </button>
            </section>

            <section className="section-three">
                <h1 className={'font-montserrat-extra-bold'}>Our formula
                    for your success</h1>
            </section>

            <section className="section-four">
                <div className="absolute-left"/>
                <div className="absolute-right"/>
                <div className="mobile-step">
                    <div className="all-step">
                        <div className="step step-one font-montserrat-extra-bold">
                            1 Step
                        </div>
                        <div className="arrow">
                            <img src="/assets/home/right.svg" alt=""/>
                        </div>
                        <div className="step step-two font-montserrat-extra-bold">
                            2 Step
                        </div>
                        <div className="arrow">
                            <img src="/assets/home/right.svg" alt=""/>
                        </div>
                        <div className="step step-three font-montserrat-extra-bold">
                            3 Step
                        </div>
                        <div className="arrow">
                            <img src="/assets/home/right.svg" alt=""/>
                        </div>
                        <div className="step step-four font-montserrat-extra-bold">
                            4 Step
                        </div>
                    </div>
                    <div className="parent-box">
                        <div className="box">
                            <div className="circle"/>
                            <div className="text font-poppins-regular">
                                Initial phase includes meeting to understand your business, audience, and goals. We'll also
                                analyze your online presence for improvement opportunities.
                            </div>
                        </div>
                        <div className="box">
                            <div className="circle"/>
                            <div className="text font-poppins-regular">
                                Once we have a clear understanding of your needs, we conduct thorough research and come up
                                with a detailed plan for the project.
                            </div>
                        </div>
                        <div className="box">
                            <div className="circle"/>
                            <div className="text font-poppins-regular">
                                With a solid plan in place, we begin developing the product or campaign. This may involve
                                creating a prototype or a minimum viable product for you to review.
                            </div>
                        </div>
                        <div className="box">
                            <div className="circle"/>
                            <div className="text font-poppins-regular">
                                We work closely with you to deliver the finished product and address any final concerns or
                                adjustments. Trust us to go above and beyond to meet your needs.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commit-text font-poppins-regular">
                    The whole operational part from our behalf is colculated to be completed in 2-3 weeks.
                </div>
                <button className={'font-montserrat-bold'}>
                    <Link href={'#js-target'}>Get Started</Link>
                </button>
            </section>

            <section className="partner-section">
                <h1 className={'font-montserrat-extra-bold'}>Proudly working with</h1>
                <div className="all-partner">
                    <div className="partner">
                        <img src="/assets/partner/pepsi.svg" alt=""/>
                    </div>
                    <div className="partner">
                        <img src="/assets/partner/khan.svg" alt=""/>
                    </div>
                    <div className="partner">
                        <img src="/assets/partner/slyde.svg" alt=""/>
                    </div>
                    <div className="partner">
                        <img src="/assets/partner/icars.svg" alt=""/>
                    </div>
                </div>
            </section>

            <section className="section-five">
                <video muted autoPlay loop playsInline>
                    <source src="/assets/video/home.mp4" type="video/mp4"/>
                </video>
                <button className={'font-montserrat-bold'}><Link href={'#js-target'}>Get Started</Link></button>
            </section>

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