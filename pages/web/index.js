import React from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import WebHeader from "../../components/WebHeader";

function Index(props) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='web-page' data-scroll-section>
            <WebHeader/>
            <div className="section-one">
                <h1 className={'font-montserrat-extra-bold'}>We are
                    your choice</h1>
            </div>
            <div className="section-two">
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/web/ideas.png" alt=""/>
                        <div className="title font-montserrat-bold">
                            Our Expertise
                        </div>
                        <div className="text font-poppins-regular">
                            With years of experience and a diverse range of clients under our belts, our developers are
                            experts in creating top-quality websites and web projects. Trust our proven track record and
                            extensive expertise to bring your vision to life.
                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/logos.png" alt=""/>
                        <div className="title font-montserrat-bold">
                            Creativity
                        </div>
                        <div className="text font-poppins-regular">
                            Our proposal combines your ideas with our expertise to create a professional, high-impact
                            product that will drive the growth of your business to new heights. Rely on us to use our
                            experience and know-how to maximize your success.
                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/practices.png" alt=""/>
                        <div className="title font-montserrat-bold">
                            Design
                        </div>
                        <div className="text font-poppins-regular">
                            Our web development designs are second to none. Our team of expert designers combines their
                            creativity and technical skills to craft visually stunning websites that engage visitors. We
                            use the latest technologies and design principles to ensure that your website not only looks
                            great, but also performs at its best.
                        </div>
                    </div>
                </div>
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/web/shield.png" alt=""/>
                        <div className="title font-montserrat-bold">
                            Security
                        </div>
                        <div className="text font-poppins-regular">
                            The importance of security and safety is of the utmost importance to us. That's why we go
                            above and beyond to ensure that all our websites are built with the highest levels of
                            security. We take every precaution to protect your website and data, that’s why you should
                            choose us for peace of mind and secure web development.
                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/ui-design.png" alt=""/>
                        <div className="title font-montserrat-bold">
                            SEO
                        </div>
                        <div className="text font-poppins-regular">
                            SEO is prioritized in all of our web development projects. From the very beginning, we
                            conduct thorough keyword research and on-page optimization to ensure that your website is
                            set up for success. As well as employing proven, technical SEO tactics to boost your
                            website's search engine rankings.

                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/practices.png" alt=""/>
                        <div className="title font-montserrat-bold ">
                            Solutions
                        </div>
                        <div className="text font-poppins-regular">
                            We take the time to understand your unique needs and goals and then craft custom solutions
                            that drive results. Whether you need a simple website or a complex, custom web application,
                            we have the skills and experience to deliver the perfect solution for you. Our solutions
                            consistently exceed expectations.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-three">
                <h1 className={'font-montserrat-bold'}>
                    Experience technical excellence with us
                </h1>
            </div>
            <div className="carousel-section">
                <div className="carousel-item">
                    <img src="/assets/carousel/carousel-img.png" alt=""/>
                </div>

                    <div className="carousel-text">
                        <div className="text font-poppins-regular">
                            1. Our design solutions are not only visually stunning,
                            but they are also strategically crafted to
                            elevate your brand and drive your business objectives forward
                        </div>
                    </div>
                 {/*   <div className="carousel-text">
                        <div className="text  font-poppins-regular">
                            2. Our unique brand identity solutions will truly capture the
                            essence of your company and set you apart
                            in the market
                        </div>
                    </div>
                    <div className="carousel-text">
                        <div className="text font-poppins-regular">
                            3. Complete and comprehensive brand identity solutions
                            that take the burden off your shoulders.
                        </div>
                    </div>
                    <div className="carousel-text">
                        <div className="text font-poppins-regular">
                            4. Running a business is a round-the-clock endeavor, that's why
                            we offer 24/7 technical support and
                            provide reliable servers to ensure that you have the tools you need to succeed
                        </div>
                    </div>*/}

            </div>


            <div className="section-four">
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/home/img1.png" alt=""/>
                        <img src="/assets/home/img3.png" alt=""/>
                    </div>
                    <div className="box">
                        <div className="title font-neue-machina-bold">
                            See what
                            we capable of
                        </div>
                        <div className="text font-poppins-regular">
                            We guarantee the quality regardless of complexity of the project
                        </div>
                        <img src="/assets/home/img2.png" alt=""/>
                    </div>
                </div>
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