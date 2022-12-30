import React from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";

function Index(props) {
    return (
        <div className='brand-page'>
            <div className="section-one">
                <h1 className="font-montserrat-extra-bold">
                    Clarity and confidence through
                    the power of brand strategy and design thinking.
                </h1>
            </div>
            <div className="section-two">
                <div className="parent-box">
                    <div className="box">
                        <div className="box-left font-neue-machina-regular">01</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                Big ideas that grow your business
                            </div>
                            <div className="text font-poppins-regular">
                                Vision, in its purest form, is the art of the possible. With our pulse on global trends,
                                cultural shifts, and consumer behaviors, we’re constantly drumming up new and better
                                ways to make the most of your opportunities.
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-left font-neue-machina-regular box-left-second">02</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                The internal alignment you need
                            </div>
                            <div className="text font-poppins-regular">
                                We align your leadership team around the core tenets of your brand to get teams marching
                                in the same direction. When everyone pulls together, more is done faster with fewer
                                resources and energy is optimized.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parent-box">
                    <div className="box">
                        <div className="box-left font-neue-machina-regular box-left-third">03</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                A brand you'll be proud of
                            </div>
                            <div className="text font-poppins-regular">
                                We help leaders develop a modern mindset that puts brand at the center of business
                                strategy. Our guidance lays the foundation for transformational change that you’ll be
                                proud to champion.
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-left font-neue-machina-regular box-left-third">04</div>
                        <div className="box-right">
                            <div className="title font-montserrat-bold">
                                Design solutions
                                that highlight your brand
                            </div>
                            <div className="text font-poppins-regular">
                                We help leaders develop a modern mindset that puts brand at the center of business
                                strategy. Our guidance lays the foundation for transformational change that you’ll be
                                proud to champion.
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
                        <img src="/assets/home/Pepsi.png" alt=""/>
                    </div>
                    <div className="box">
                        <img src="/assets/home/Icars.png" alt=""/>
                    </div>
                </div>
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/home/Slyde.png" alt=""/>
                    </div>
                    <div className="box">
                        <img src="/assets/home/Icars.png" alt=""/>
                    </div>
                </div>
            </section>
            <div className="section-three">
                <h1 className="font-montserrat-extra-bold">
                    ARE YOU READY TO RALLY AROUND YOUR BIG IDEA?
                </h1>
            </div>
            <section className="form-section">
                <FormComponent/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Index;