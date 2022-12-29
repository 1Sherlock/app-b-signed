import React from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";

function Index(props) {
    return (
        <div className="home-page">
            <section className="section-one">
                <h1 className='font-montserrat-extra-bold'>We are
                    your choice</h1>
            </section>
            <section className="section-two">
                <div className="parent-box">
                    <div className="box">
                        <div className="title font-montserrat-bold">
                            Fully Remote
                        </div>
                        <div className="text font-poppins-regular">
                            We believe in the power of remote work to bring people together and create a more efficient,
                            productive, and sustainable business process. By operating fully remotely, we can tap into
                            the talents and expertise of professionals from around the globe, fostering a diverse and
                            inclusive team. Our clients benefit from faster turnaround times and lower costs thanks to
                            our streamlined, virtual processes. So, whether you're a client or a team member, our fully
                            remote business model is a win-win for everyone involved.
                        </div>
                    </div>
                    <div className="box">
                        <div className="title title-pink font-montserrat-bold">
                            Fast
                        </div>
                        <div className="text font-poppins-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="parent-box">
                    <div className="box">
                        <div className="title title-pink font-montserrat-bold">
                            Approach
                        </div>
                        <div className="text font-poppins-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="box ">
                        <div className="title font-montserrat-bold">
                            Creativity
                        </div>
                        <div className="text font-poppins-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                <button className={'font-montserrat-bold'}>Get Started</button>
            </section>
            <section className="section-three">
                <h1 className={'font-montserrat-extra-bold'}>Our formula
                    for your success</h1>
            </section>
            <section className="section-four">
                <div className="absolute-left"/>
                <div className="absolute-right"/>
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
                            1 on 1 meeting with our bussiness consultant. In this step we will have full picture of your
                            idea and goals you desire to accopmlish with us
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle"/>
                        <div className="text font-poppins-regular">
                            This step is designed for research analysis of the industry you on. Within this step you
                            will be constantly updated about work done
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle"/>
                        <div className="text font-poppins-regular">
                            Our prototype proposal will be ready to be presented to you. This step is a presentation of
                            all software aspects of the product as well as marketing proposals
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle"/>
                        <div className="text font-poppins-regular">
                            Marketing strategies testing and launching final soft online. Our consultants will be online
                            for any questions that might appear
                        </div>
                    </div>
                </div>
                <div className="commit-text font-poppins-regular">
                    The whole operational part from our behalf is colculated to be completed in 2-3 weeks.
                </div>
                <button className={'font-montserrat-bold'}>Get Started</button>
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
                <img src="/assets/home/bsigned.svg" alt=""/>
                <button className={'font-montserrat-bold'}>Get Started</button>
            </section>
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