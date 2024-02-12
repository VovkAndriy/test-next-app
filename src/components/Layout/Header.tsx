import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const activeStyle = (pathname: string) => {
    return router.pathname === pathname ? { color: "white" } : {};
  };
  return (
    <div className="fixed top-0 z-50 flex text-lg font-light md:text-3xl flex-row px-10  justify-between md:justify-start gap-3 bg-black/90 md:bg-black/85  md:gap-9 items-center p-2.5 md:px-6 md:pl-24 text-gray w-full h-24">
      <Link href="/" className="text-white md:text-4xl font-ligFht md:pr-10">
        Car Market
      </Link>
      <Link href="/" legacyBehavior>
        <a style={activeStyle("/")}>Home</a>
      </Link>
      <Link href="/catalog" legacyBehavior>
        <a style={activeStyle("/catalog")}>Catalog</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a style={activeStyle("/contact")}>Contact Us</a>
      </Link>
    </div>
  );
};

export default Header;
