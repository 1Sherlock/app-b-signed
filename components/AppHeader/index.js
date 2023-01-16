import React, {useEffect} from 'react';
import Navbar from "../Navbar";

const AppHeader = () => {
    useEffect(() => {
        document.getElementById("tap-to").style.display = "block"
        return () => {
            document.getElementById("tap-to").style.display = "none"
        }
    }, [])
    return (
        <div className="web-page-main-header app">
            <Navbar/>

            <div className="web-page-main-header-content">
                <div className="web-page-main-header-content-left">
                    <h3 className="font-neue-machina-regular">Expertly developed apps for your business</h3>
                </div>
                <img src="/assets/images/app-header.png" alt="web-header"/>
                {/*<div className="web-page-main-header-content-left"></div>*/}
                <h3 className="font-neue-machina-regular text-mobile">Expertly developed apps for your business</h3>
                <button type="button" className="font-montserrat-bold">Place an order</button>
            </div>
        </div>
    );
};

export default AppHeader;