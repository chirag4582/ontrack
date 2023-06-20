"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";

const Pronote = dynamic(() => import("@/components/Pronote"));
const Zen = dynamic(() => import("@/components/Zen"));
const Notesdisplay = dynamic(() => import("@/components/Notes"));

export default function Notes() {
  const [isOpen, setIsOpen] = useState(false);
  const [customClass, setCustomClass] = useState({ sidebar: "hidden" });
  const [renderFile, setRenderFile] = useState("Notesdisplay");

  useEffect(() => {
    if (typeof window !== undefined){
    if (isOpen) {
      const path = window.location.pathname;
      if (path === "/notes") {
        setCustomClass({
          sidebar: "flex-1 bg-slate-900 max-w-xs h-full pb-72",
        });
      } 
    }
    else {
      setCustomClass({ sidebar: "hidden" });
    }}
  }, [isOpen]);

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
    console.log('clickHandler - isOpen:', isOpen);
  };

  const renderComponent = () => {
    if (renderFile === "Pronote") {
      return <Pronote />;
    } else if (renderFile === "Zen") {
      return <Zen />;
    } else {
      return <Notesdisplay />;
    }
  };

  return (
    <div>
      <Navbar />
      <Image
        className="absolute top-9 left-9 animate-pop-out cursor-pointer"
        onClick={clickHandler}
        src="/hamburger.svg"
        width={25}
        height={25}
        alt="hamburger"
      />
      <div className="flex">
        {/* sidebar */}
        <div className={customClass.sidebar}>
          <h1
            onClick={() => {
              setRenderFile("Notesdisplay");
            }}
            className="text-lg font-bold mt-5 mb-2 p-2 mx-5 w-[68px] text-yellow-400 border border-yellow-500 cursor-pointer"
          >
            Notes
          </h1>
          <q className="mx-6 text-yellow-600 mt-1 mb-5 text-sm">Your notes</q>
          <h1
            onClick={() => {
              setRenderFile("Pronote");
            }}
            className="text-lg font-bold mt-5 mb-2 p-2 mx-5 w-24 text-yellow-400 border border-yellow-500 cursor-pointer"
          >
            Pro Note
          </h1>
          <q className="mx-6 text-yellow-600 mt-1 mb-5 text-sm">
            Create your notes for future time saving
          </q>
          <h1
            onClick={() => {
              setRenderFile("Zen");
            }}
            className="text-lg font-bold mt-8 mb-2 p-2 mx-5 w-36 text-yellow-400 border border-yellow-500 cursor-pointer"
          >
            Zen Typeaway
          </h1>
          <q className="mx-6 text-yellow-600 mt-1 mb-5 text-sm">
            Your ideas and calm music
          </q>
          <h1 className="text-red-500 my-[39.7px] mx-28 animate-pulse">
            Coming soon
          </h1>
        </div>
        {/* main */}
        <div className="flex-1">{renderComponent()}</div>
      </div>
    </div>
  );
}
