import React from 'react';
import Link from "next/link";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Navbar = () => {
    const { scroll } = useLocomotiveScroll();

    const toContact = () => {
        const target = document.querySelector('#js-target');

        scroll.scrollTo(target);
    }
    return (
        <div className="main-header-nav">
            <Link href="/"><img src="/assets/icons/logo.svg" alt="bsigned" className="logo"/></Link>
            <ul>
                <li><Link href="/web" className="font-inter-regular">Web Development</Link></li>
                <li><Link href="/app" className="font-inter-regular">App Development</Link></li>
                <li><Link href="/brand" className="font-inter-regular">Branding</Link></li>
                <li><Link href="#" className="font-inter-regular" onClick={toContact}>Contact Us</Link></li>
            </ul>
            <a href="tel:+15043335601"><img src="/assets/icons/telephone.svg" alt="telephone"/></a>
        </div>
    );
};

export default Navbar;