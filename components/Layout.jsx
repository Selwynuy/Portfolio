import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Selwyn Uy | Next.js Developer & Penetration Tester</title>
        <meta
          name="description"
          content="Selwyn Uy is a Next.js web developer and penetration tester building fast, secure web apps."
        />
        <meta
          name="keywords"
          content="selwyn uy, next.js, nextjs, react, web developer, frontend, full-stack, penetration tester, pentest, cybersecurity, framer motion, portfolio"
        />
        <meta name="author" content="Selwyn Uy" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
