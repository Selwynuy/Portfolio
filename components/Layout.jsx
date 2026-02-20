import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
  const router = useRouter();
  const isWorkDetailPage = router.pathname.startsWith("/work/") && router.pathname !== "/work";

  // Add class to html and body for work detail pages
  useEffect(() => {
    // Always remove classes first to ensure clean state
    document.documentElement.classList.remove("page-scrollable");
    document.body.classList.remove("page-scrollable");

    if (isWorkDetailPage) {
      const timer = setTimeout(() => {
        document.documentElement.classList.add("page-scrollable");
        document.body.classList.add("page-scrollable");
      }, 1200); // Delay to match page transition

      return () => {
        clearTimeout(timer);
        // Clean up on unmount or route change
        document.documentElement.classList.remove("page-scrollable");
        document.body.classList.remove("page-scrollable");
      };
    }
  }, [isWorkDetailPage]);

  return (
    <main
      className={`bg-site text-white bg-cover bg-no-repeat ${
        sora.variable
      } font-sora relative ${!isWorkDetailPage ? "page" : "page-scrollable-main"}`}
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
