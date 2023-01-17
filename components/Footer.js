import React from 'react';
import Link from "next/link";
function Footer(props) {
    return (
        <div className="footer-section">
            <div className="footer-section-left-side">
                <Link href="/home" className="brand">
                    <img src="/assets/icons/logo-footer.svg" alt=""/>
                </Link>
                <p className="text font-poppins-regular desktop-footer-text">C 2023 All Rights reserved
                    Be Signed  LLC</p>
            </div>
            <div className="footer-section-right-side">
                <div className="menu">
                    <div className="nav">
                        <b className={'font-montserrat-extra-bold'}>Company</b>
                        <ul>
                            <li><Link className={'font-poppins-regular'} href="/home">Home</Link></li>
                            <li><Link className={'font-poppins-regular'} href="/web">Web development</Link></li>
                            <li><Link className={'font-poppins-regular'} href="/app">App development</Link></li>
                            <li><Link className={'font-poppins-regular'} href="/brand">Branding</Link></li>
                        </ul>
                    </div>
                    <div className="nav">
                        <b className={'font-montserrat-extra-bold'}>Contacts</b>
                        <ul>
                            <li><a className={'font-poppins-regular'} href="#">
                                <img src="/assets/icons/phone.svg" alt=""/>
                                <span>+1 (504) 333 5601</span></a></li>
                            <li><a className={'font-poppins-regular'} href="https://www.instagram.com/bsigned.us/">
                                <img src="/assets/icons/instagram.svg" alt=""/>
                                <span>@besigned.us</span></a></li>
                            <li><a className={'font-poppins-regular'} href="mailto:vasimlaban@bsigned.us">
                                <img src="/assets/icons/email.svg" alt=""/>
                                <span>vasimlaban@bsigned.us</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text font-poppins-regular mobile-footer-text">C 2022 All Rights reserved
                Be Signed  LLC</p>
        </div>
    );
}

export default Footer;