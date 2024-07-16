"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Carticon from "./Carticon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute w-full left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 text-xl z-10">
        {links.map((item) => (
          <Link href={item.url}>{item.title}</Link>
        ))}
      {!user ? (
        <Link href="/login">Login</Link>
      ) : (
        <Link href="/login">Order</Link>
      )}
      <Link href="/cart">
        <Carticon />
      </Link>
      </div>
    </div>
  );
};

export default Menu;
