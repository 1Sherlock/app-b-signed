import {Html, Head, Main, NextScript} from 'next/document'
import React, {useState} from "react";
import Modal from "../components/Modal";
import Example from "../components/Example";

export default function Document() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Html lang="en">
            <Head>
                <title>Be Signed. You Desire We Design</title>
                <meta name="description" content="Be Signed. You Desire We Design"/>

                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="english"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="title" content="Be Signed. You Desire We Design"/>
                <meta name="image" content="/favicon.svg"/>
                <meta content="/favicon.svg" property="og:image"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <div className="scroll-down-item" id="scroll-element">
                <img src="/assets/images/scroll-down.png" alt="scroll"/>
            </div>
            <div className="layer-scroll-component" id="tap-to">
                <img src="/assets/images/to-to-see.png" alt="tap-to-see"/>
            </div>
            </body>

            <Modal isOpen={false}>
                <div className="project-layer">
                    <h2 className="font-neue-machina-regular">Our works</h2>
                    <div className="project-layer-content">
                        <div>
                            <h3 className="font-montserrat-extra-bold">Icars. <br/>
                                Car retail service</h3>
                            <div className="project-layer-content-info">
                                <h4 className="font-montserrat-bold">Authentic Brand <br/>
                                    Engagement</h4>
                                <h5 className="font-montserrat-bold">
                                    AN ORIGINAL PROJECT FOR ICARS
                                </h5>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </Modal>
        </Html>
    )
}
