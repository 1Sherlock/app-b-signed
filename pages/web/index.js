import React from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";

function Index(props) {
    return (
        <div className='web-page'>
            <div className="section-one">
                <h1>We are
                    your choice</h1>
            </div>
            <div className="section-two">
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/web/ideas.png" alt=""/>
                        <div className="title">
                            Our Expertise
                        </div>
                        <div className="text">
                            Our developers have gone through many years of practice, creating hundreds of websites and
                            web projets. Veriety of clients from veriety of fields including: entertainment, non-profit,
                            commerce, logistics, medium and small sized business have been uttery satisfied with the
                            proposed web solutions.
                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/logos.png" alt=""/>
                        <div className="title">
                            Creativity
                        </div>
                        <div className="text">
                            The proposal takes into account your ideas and combines our experience and expertise into
                            proffessionally developed product that will grow your business to the widest scale possible.

                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/practices.png" alt=""/>
                        <div className="title">
                            Design
                        </div>
                        <div className="text">
                            Our developers have gone through many years of practice, creating hundreds of websites and
                            web projets. Veriety of clients from veriety of fields including: entertainment, non-profit,
                            commerce, logistics, medium and small sized business have been uttery satisfied with the
                            proposed web solutions.
                        </div>
                    </div>
                </div>
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/web/shield.png" alt=""/>
                        <div className="title">
                            Security
                        </div>
                        <div className="text">
                            Our developers have gone through many years of practice, creating hundreds of websites and
                            web projets. Veriety of clients from veriety of fields including: entertainment, non-profit,
                            commerce, logistics, medium and small sized business have been uttery satisfied with the
                            proposed web solutions.
                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/ui-design.png" alt=""/>
                        <div className="title">
                            SEO
                        </div>
                        <div className="text">
                            The proposal takes into account your ideas and combines our experience and expertise into
                            proffessionally developed product that will grow your business to the widest scale possible.

                        </div>
                    </div>
                    <div className="box">
                        <img src="/assets/web/practices.png" alt=""/>
                        <div className="title">
                            Solutions
                        </div>
                        <div className="text">
                            Our developers have gone through many years of practice, creating hundreds of websites and
                            web projets. Veriety of clients from veriety of fields including: entertainment, non-profit,
                            commerce, logistics, medium and small sized business have been uttery satisfied with the
                            proposed web solutions.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-three">
                <h1>We guarantee technical quality</h1>
            </div>
            <div className="carousel-section">
                <div className="carousel-item">
                    <img src="/assets/carousel/carousel-img.png" alt=""/>
                </div>
                <div className="carousel-text">
                    <div className="count">
                        <h1>01</h1>
                        <h4>02</h4>
                    </div>
                    <div className="text">
                       1. Write about strategically orientated design solutions.
                    </div>
                    <div className="text">
                        2. Fully unique brand identatity

                    </div>
                    <div className="text">
                        3. Zero to hundred code development no templets used
                    </div>
                    <div className="text">
                        4. 24/7 technical support/servers provided
                    </div>
                </div>
            </div>
            <div className="section-four">
                <div className="parent-box">
                    <div className="box">
                        <img src="/assets/home/img1.png" alt=""/>
                        <img src="/assets/home/img3.png" alt=""/>
                    </div>
                    <div className="box">
                        <div className="title">
                            Complex
                            project solutions
                        </div>
                        <div className="text">
                            We guarantee the quality regardless of complexity of the project
                        </div>
                        <img src="/assets/home/img2.png" alt=""/>
                    </div>
                </div>
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