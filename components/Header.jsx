import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* brand */}
          <Link href="/">
            <span
              className="text-3xl md:text-4xl lowercase leading-none tracking-tight transition-opacity duration-300 hover:opacity-80"
              aria-label="Selwyn Uy"
            >
              <span className="font-extrabold">selwyn</span>{" "}
              <span className="font-light text-white/70">uy</span>
              <span className="text-accent">.</span>
            </span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
