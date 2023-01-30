import React, {useEffect} from 'react';
import Navbar from "../Navbar";

const BranHeader = () => {
    useEffect(() => {
        document.getElementById("tap-to").style.display = "block"
        return () => {
            document.getElementById("tap-to").style.display = "none"
        }
    }, [])
    return (
        <div className="brand-page-main-header">
            <Navbar/>
            <div className="brand-page-main-header-content">
                <div className="brand-page-main-header-content-img">
                    <video autoPlay loop muted playsInline>
                        <source src="/assets/video/we-do-branding.mp4" type="video/mp4"/>
                    </video>
                    {/*<img src="/assets/images/brand-header.png" alt="brand"/>*/}
                </div>
                <div className="brand-page-main-header-content-text">
                    <p>Driven by a passion for creating meaningful connections, our team of specialists will work with you to develop a powerful brand identity and rapidly drive online success.</p>
                </div>
            </div>
        </div>
    );
};

export default BranHeader;