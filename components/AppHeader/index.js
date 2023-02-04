import React, {useEffect} from 'react';
import Navbar from "../Navbar";

const AppHeader = () => {
    return (
        <div className="web-page-main-header app">
            <Navbar/>

            <div className="web-page-main-header-content">
                <div className="web-page-main-header-content-left">
                    <h3 className="font-neue-machina-regular">Expertly developed apps for your business</h3>
                </div>
                <video autoPlay loop muted playsInline className="web-page-header-img">
                    <source src="/assets/video/phone.mp4" type="video/mp4"/>
                </video>
                {/*<img src="/assets/images/app-header.png" alt="web-header" className="web-page-header-img"/>*/}
                {/*<div className="web-page-main-header-content-left"></div>*/}
                <h3 className="font-neue-machina-regular text-mobile">Expertly developed apps for your business</h3>
                <button type="button" className="font-montserrat-bold">Place an order</button>
            </div>
        </div>
    );
};

export default AppHeader;