import React, {useEffect} from 'react';
import Navbar from "../Navbar";

const WebHeader = () => {
    useEffect(() => {
        document.getElementById("tap-to").style.display = "block"
        return () => {
            document.getElementById("tap-to").style.display = "none"
        }
    }, [])
    return (
        <div className="web-page-main-header">
            <Navbar/>

            <div className="web-page-main-header-content">
                <div className="web-page-main-header-content-left">
                    <h3 className="font-neue-machina-regular">Expert Web
                        Development for your
                        business</h3>
                </div>
                <video autoPlay loop muted playsInline className="web-page-header-img">
                    <source src="/assets/video/pc.mp4" type="video/mp4"/>
                </video>
                {/*<img src="/assets/images/web-header.png" alt="web-header" className="web-page-header-img"/>*/}
                {/*<div className="web-page-main-header-content-left"></div>*/}
                <h3 className="font-neue-machina-regular text-mobile">Expert Web Development for your business</h3>
                <button type="button" className="font-montserrat-bold">Place an order</button>
            </div>
        </div>
    );
};

export default WebHeader;