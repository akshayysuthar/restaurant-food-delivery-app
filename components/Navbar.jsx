import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Carticon from "./Carticon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      {/* for large screen */}
      {/* left links  */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo  */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Mssimo</Link>
      </div>
      {/* mobile menu  */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right links  */}
      <div className="hidden md:flex gap-4 justify-end items-center flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-500 px-1 rounded-md text-white ">
          <Image src="/phone.png" alt="" height={20} width={20} />
          <span>12345 67890</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Carticon />
      </div>
    </div>
  );
};

export default Navbar;
