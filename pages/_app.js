// import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Press_Start_2P, Gugi } from "next/font/google";
import Head from "next/head";

const press_Start_2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-Press-Start-2P",
  weight: "400",
});
const gugi = Gugi({
  subsets: ["latin"],
  variable: "--font-Gugi",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${press_Start_2P.variable} ${gugi.variable} w-full min-h-screen bg-dark`}
      >
        <NavBar />
        <Component {...pageProps} />
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}
