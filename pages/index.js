import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import React, {useEffect} from 'react';
import Link from "next/link";
const Home = () => {
    useEffect(() => {
        // hoverMouse("nizom")
        const boxercontainer = document.getElementById("container")
        const boxer = document.getElementById("nizom"),
            maxMove = boxercontainer.offsetWidth / 30,
            boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
            boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
            fluidboxer = window.matchMedia("(min-width: 800px)");

        function getMousePos(xRef, yRef) {

            let panelRect = boxercontainer.getBoundingClientRect();
            return {
                x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*boxercontainer.offsetWidth,
                y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * boxercontainer.offsetHeight
            };
        }

        document.body.addEventListener("mousemove", function(e) {
            let mousePos = getMousePos(e.clientX, e.clientY),
                distX = mousePos.x - boxerCenterX,
                distY = mousePos.y - boxerCenterY;
            if (fluidboxer.matches) {
                boxer.style.transform = "translate("+(-1*distX)/90+"px,"+(-1*distY)/90+"px)";
            }
        })
    }, [])

    return (
        <div className={styles.main} id="container">

            <div className={styles.contentWrap}>
                <div className={styles.leftContent}/>
                <div className={styles.mainContent}>
                    <Link href="/" className={styles.logo} data-aos="fade-up"><img src="/assets/icons/logo.svg" alt="logo"/></Link>
                    <div className={styles.logoMobile}>
                        <Link href="/" className={styles.logoImg}><img src="/assets/icons/logo.svg" alt="logo"/></Link>
                        <a href="tel:+15043335601"><img src="/assets/icons/telephone.svg" alt="telephone"/></a>


                    </div>
                    <div className={styles.videoWrap}>
                        <video muted autoPlay loop playsInline>
                            <source src="/assets/video/shart.mp4"/>
                        </video>
                        <div className={styles.rotateTextWrap}>
                            <div  id="nizom">
                                <img src="/assets/images/rotate.svg" alt="rotate" className={styles.rotateText}/>
                                <div className={styles.rotateCircle}/>
                                <div className={styles.rotateCircleMini}/>
                            </div>

                        </div>
                    </div>
                    <p>Our website is currently under development</p>
                </div>
                <div className={styles.rightContent}>
                    <h3 className="font-montserrat-bold">Contacts</h3>
                    <ul>
                        <li><a href="tel:+15043335601"><span className="icon icon-phone"/> +1 (504) 333 5601</a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><span className="icon icon-instagram"/> @besigned.us</a></li>
                        <li><a href="mailto:vasimlaban@besigned.us"><span className="icon icon-email"/> vasimlaban@besigned.us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>B-Signed</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <div className={styles.description}>
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>pages/index.js</code>
//           </p>
//           <div>
//             <a
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>
//
//         <div className={styles.center}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//           <div className={styles.thirteen}>
//             <Image
//               src="/thirteen.svg"
//               alt="13"
//               width={40}
//               height={31}
//               priority
//             />
//           </div>
//         </div>
//
//         <div className={styles.grid}>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Docs <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Find in-depth information about Next.js features and&nbsp;API.
//             </p>
//           </a>
//
//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Learn <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>
//
//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Templates <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Discover and deploy boilerplate example Next.js&nbsp;projects.
//             </p>
//           </a>
//
//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Deploy <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Instantly deploy your Next.js site to a shareable URL
//               with&nbsp;Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </>
//   )
// }
