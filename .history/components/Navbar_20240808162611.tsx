import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-600 justify-between max-container padding-container relative z-30 py-3">
        <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>
    </nav>
  );
};

export default Navbar;
