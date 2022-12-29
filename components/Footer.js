import React from 'react';

function Footer(props) {
    return (
        <div className="footer-section">
            <div className="footer-section-left-side">
                <a href="#">
                    <img src="/assets/icons/logo-footer.svg" alt=""/>
                </a>
                <p className="text font-poppins-regular">C 2022 All Rights reserved
                    Be Signed  LLC</p>
            </div>
            <div className="footer-section-right-side">
                <div className="menu">
                    <div className="nav">
                        <b className={'font-montserrat-extra-bold'}>Company</b>
                        <ul>
                            <li><a className={'font-poppins-regular'} href="#">Services</a></li>
                            <li><a className={'font-poppins-regular'} href="#">Projects</a></li>
                            <li><a className={'font-poppins-regular'} href="#">Reviews</a></li>
                        </ul>
                    </div>
                    <div className="nav">
                        <b className={'font-montserrat-extra-bold'}>Conatcts</b>
                        <ul>
                            <li><a className={'font-poppins-regular'} href="#">
                                <img src="/assets/icons/phone.svg" alt=""/>
                                +1 (504) 333 5601</a></li>
                            <li><a className={'font-poppins-regular'} href="#">
                                <img src="/assets/icons/instagram.svg" alt=""/>
                                @besigned.us</a></li>
                            <li><a className={'font-poppins-regular'} href="#">
                                <img src="/assets/icons/email.svg" alt=""/>
                                costumer@besigned.us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;