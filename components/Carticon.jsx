import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carticon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-1">
      <div className="relative md:w-5 md:h-5 w-8 h-8">
        <Image src="/cart.png" fill />
      </div>
      <span>Cart (3) </span>
    </Link>
  );
};

export default Carticon;
