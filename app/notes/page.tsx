"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Notes() {
  const [isOpen, setIsOpen] = useState(false);
  const [customClass, setcustomClass] = useState({ sidebar: "hidden" });

  useEffect(() => {
    if (isOpen) {
      setcustomClass({ sidebar: "flex-1 bg-slate-900 max-w-xs h-full pb-72" });
    } else {
      setcustomClass({ sidebar: "hidden" });
    }
  }, [isOpen]);

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <Image
        className="absolute top-9 left-9 animate-pop-out"
        onClick={() => {
          clickHandler();
        }}
        src="/hamburger.svg"
        width={25}
        height={25}
        alt="hamburger"
      />
      <div className="flex">
        {/* sidebar */}
        <div className={`${customClass.sidebar}`}>
        <h1 className="text-lg font-bold mt-5 mb-2 p-2 mx-5 w-24 text-yellow-400 border border-yellow-500">Pro Note</h1>
          <q className="mx-6 text-yellow-600 mt-1 mb-5 text-sm">Create your notes for future time saving</q>
          <h1 className="text-lg font-bold mt-12 mb-2 p-2 mx-5 w-36 text-yellow-400 border border-yellow-500">Zen Typeaway</h1>
          <q className="mx-6 text-yellow-600 mt-1 mb-5 text-sm">Your ideas and calm music</q>
          <h1 className="text-red-500 my-20 mx-28 animate-pulse">Coming soon</h1>
        </div>
        {/* main  */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
