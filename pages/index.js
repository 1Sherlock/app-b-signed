import styles from '../styles/Home.module.scss'

import React, {useEffect} from 'react';
import Link from "next/link";
const Home = () => {
    useEffect(() => {
        // hoverMouse("nizom")
        const boxercontainer = document.getElementById("container")
        const boxer = document.getElementById("nizom"),
            maxMove = boxercontainer.offsetWidth / 30,
            boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
            boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
            fluidboxer = window.matchMedia("(min-width: 800px)");

        function getMousePos(xRef, yRef) {

            let panelRect = boxercontainer.getBoundingClientRect();
            return {
                x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*boxercontainer.offsetWidth,
                y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * boxercontainer.offsetHeight
            };
        }

        document.body.addEventListener("mousemove", function(e) {
            let mousePos = getMousePos(e.clientX, e.clientY),
                distX = mousePos.x - boxerCenterX,
                distY = mousePos.y - boxerCenterY;
            if (fluidboxer.matches) {
                boxer.style.transform = "translate("+(-1*distX)/90+"px,"+(-1*distY)/90+"px)";
            }
        })
    }, [])

    return (
        <div className={styles.main} id="container">
            <div className={styles.contentWrap}>
                <div className={styles.leftContent}/>
                <div className={styles.mainContent}>
                    <Link href="/" className={styles.logo} data-aos="fade-up"><img src="/assets/icons/logo.svg" alt="logo"/></Link>
                    <div className={styles.logoMobile}>
                        <Link href="/" className={styles.logoImg}><img src="/assets/icons/logo.svg" alt="logo"/></Link>
                        <a href="tel:+15043335601"><img src="/assets/icons/telephone.svg" alt="telephone"/></a>
                    </div>
                    <div className={styles.videoWrap}>
                        <video muted autoPlay loop playsInline>
                            <source src="/assets/video/shart.mp4"/>
                        </video>
                        <div className={styles.rotateTextWrap}>
                            <div  id="nizom">
                                <img src="/assets/images/rotate.svg" alt="rotate" className={styles.rotateText}/>
                                <div className={styles.rotateCircle}/>
                                <div className={styles.rotateCircleMini}/>
                            </div>
                        </div>
                    </div>
                    <p>Our website is currently under development</p>
                </div>
                <div className={styles.rightContent}>
                    <h3 className="font-montserrat-bold">Contacts</h3>
                    <ul>
                        <li><a href="tel:+15043335601"><span className="icon icon-phone"/> +1 (504) 333 5601</a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><span className="icon icon-instagram"/> @besigned.us</a></li>
                        <li><a href="mailto:vasimlaban@besigned.us"><span className="icon icon-email"/> vasimlaban@besigned.us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
