import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "locomotive-scroll/dist/locomotive-scroll.css"

import '/styles/globals.scss'
import '/styles/style.scss';
import '/styles/fonts.scss';
import '/styles/header.scss';
import "/styles/projects.scss";
import "/styles/web-header.scss";
import "/styles/bran-header.scss";
import Head from "next/head";
import React from "react";

// import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
// import {useRef} from "react";

export default function App({Component, pageProps}) {
    // const containerRef = useRef(null);
    return (
    //     <LocomotiveScrollProvider
    //     options={
    //         {
    //             smooth: true,
    //         }
    //     }
    //     watch={[]}
    //     containerRef={containerRef}
    // >
    //     <main data-scroll-container ref={containerRef}>
        <>
            <Head>
                <title>Be Signed. You Desire We Design</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
    // </LocomotiveScrollProvider>)
}
