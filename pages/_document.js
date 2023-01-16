import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>bSigned</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div className="scroll-down-item" id="scroll-element">
            <img src="/assets/images/scroll-down.png" alt="scroll"/>
        </div>
        <div className="layer-scroll-component" id="tap-to">
            <img src="/assets/images/to-to-see.png" alt="tap-to-see"/>
        </div>
      </body>
    </Html>
  )
}
