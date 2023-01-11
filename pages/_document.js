import { Html, Head, Main, NextScript } from 'next/document'

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
      </body>
    </Html>
  )
}
