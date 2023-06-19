"use client"

import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  return (
    <div className=" bg-yellow-300 py-2 flex items-center h-24 justify-between">
      <div className="flex items-center">
        <div className="ml-5 hover:animate-[wave_5s_ease-in-out_2] ">
          <Image src="/logodot.png" width={50} height={70} alt="dot of logo" />
        </div>
        <div className="ml-1 ">
          <Image
            src="/logotext.png"
            width={110}
            height={30}
            alt="text of logo"
          />
        </div>
      </div>
      <div className="mx-4">
        <Link className="mx-2 text-cyan-700 text-2xl" href={"/"}>Home</Link> 
        <Link className="mx-2 text-cyan-700 text-2xl" href={'/blog'}>Blogs</Link>
        <Link className="mx-2 text-cyan-700 text-2xl" href={'/notes'}>Notes</Link>
      </div>
    </div>
  );
}
