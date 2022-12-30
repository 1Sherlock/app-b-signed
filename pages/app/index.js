import React from 'react';
import FormComponent from "../../components/FormComponent";
import Footer from "../../components/Footer";

function Index(props) {
    return (
        <div className="app-page">
            <div className="title-section">
                <h1 className={'font-montserrat-extra-bold'}>We collaborate Strategy to built
                    the best app for your business</h1>
            </div>
            <div className="section-one">
                <div className="parent-box">
                    <div className="box">
                        <div className="title font-neue-machina-bold">
                            01
                        </div>
                        <div className="text font-poppins-regular">
                            A DISCOVERY CALL
                            There's a lot that we do before actually starting the project. We do market research and
                            analysis, understand the competitive landscape, understand and document clients design and
                            branding preferences, consult with all the key stakeholders to discuss and discover what you
                            would like to accomplish through mobile application development.
                        </div>
                    </div>
                    <div className="box">
                        <div className="title font-neue-machina-bold text-second">
                            02
                        </div>
                        <div className="text font-poppins-regular ">
                            PLANNING AND RESEARCHING
                            From the initial discovery call, we try to collect as much as possible details on where you
                            would like to stand to the end of our initial phase collaboration. The collected details
                            will be used by our experts to research and propose an adequate plan and scope of work for
                            your project. Researching and documenting industry leading practice and approaching your
                            problem in-depth will lead to an proposal delivery that you will either accept or reject.
                        </div>
                    </div>
                    <div className="box">
                        <div className="title font-neue-machina-bold text-third">
                            03
                        </div>
                        <div className="text font-poppins-regular ">
                            DEVELOPMENT & TESTING
                            Once you go through our proof-of-concept, our assigned team of developers will start their
                            work and keep you updated at least twice a week on the progress of your project. Depending
                            on the scale and size of the project, we involve people at least 5 people: Project Manager,
                            Software Architect, UI/UX Designer, QA Tester, and a Developer, and with their hard work it
                            generally takes about 2-4 months to complete the project.
                        </div>
                    </div>
                </div>
                <button className={'font-montserrat-bold'}>Place an order</button>
            </div>
            <div className="section-two">
                <h1 className={'font-montserrat-extra-bold'}>
                    We guarantee technical quality
                </h1>
            </div>
            <div className="section-three">
                <div className="box">
                    <div className="title font-montserrat-bold">
                        Slyde App
                    </div>
                    <div className="text-left font-poppins-regular">
                        A unique experience for party lovers and a vital business tool
                        for those who make the parties
                        happen!
                    </div>
                    <div className="text-right font-poppins-regular">
                        In development of the project we implemented Reaserch Strategies that helped us to deliberately
                        stracture the app and all its elements. Technical aspects of the peoject is beautifully allign
                        with design proposed to the client.
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