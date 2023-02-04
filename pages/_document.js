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
            </body>
        </Html>
    )
}
