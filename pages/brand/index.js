import React from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";
import Link from "next/link";

function Index(props) {
    return (
        <div className='brand-page' data-scroll-section>
            <div className="section-one">
                <h1 className="font-montserrat-extra-bold">
                    Experience the transformative power
                    of our brand strategy and design thinking services
                </h1>
            </div>
            <div className="section-two">
                <div className="parent-box">
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
                <div className="parent-box second-parent-box">
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
                <div className="title font-montserrat-extra-bold">
                    Brands we worked with
                </div>
                <div className="brand">
                    <img src="/assets/partner/pepsi.svg" alt=""/>
                    <img src="/assets/partner/khan.svg" alt=""/>
                    <img src="/assets/partner/slyde.svg" alt=""/>
                    <img src="/assets/partner/icars.svg" alt=""/>
                </div>

                <div className="parent-box">
                    <div className="box">
                        <Link href="/projects/pepsi"><img src="/assets/home/Pepsi.png" alt=""/></Link>
                    </div>
                    <div className="box">
                        <Link href="/projects/i-cars"><img src="/assets/home/Icars.png" alt=""/></Link>
                    </div>
                </div>
                <div className="parent-box">
                    <div className="box">
                        <Link href="/projects/social"><img src="/assets/home/Slyde.png" alt=""/></Link>
                    </div>
                    <div className="box">
                        <Link href="/projects/khan-academy"><img src="/assets/home/kham1.png" alt=""/></Link>
                    </div>
                </div>
            </section>
            <div className="section-three">
                <h1 className="font-montserrat-extra-bold">
                    Ready to bring your big idea to life?
                </h1>
            </div>
            <section className="form-section" id="js-target">
                <FormComponent/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Index;