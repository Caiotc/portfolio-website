"use client";
import React, { useState } from "react";
import { BreadCrumbAtom } from "@/components/atoms/icons/breadcrumb";
import hamburguer from "../../../../public/breadcrum.svg";
import close from "../../../../public/close.svg";
import Link from "next/link";

const Links = [
  { name: "home", link: "/" },
  { name: "works", link: "/" },
  { name: "about-me", link: "/" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`flex rounded-md flex-row justify-around w-full px-4 font-mono ${
        isOpen ? "flex-col" : ""
      }`}
    >
      <section className="w-full flex justify-around items-centaer">
        <section className="w-full flex justify-start items-center ">
          <span>my-portfolio-website</span>
        </section>
        <section className="flex justify-end items-center gap-4 sm:flex-wrap ">
          <div className="relative flex justify-center items-center bg-slate-500 w-10 h-10 rounded-lg md:hidden hover:bg-slate-700">
            <BreadCrumbAtom
              src={isOpen ? close : hamburguer}
              alt=""
              onClick={() => setIsOpen(!isOpen)}
            />{" "}
          </div>
          {/*nav links */}
        </section>
      </section>
      <section
        className={` flex  gap-2 ${
          isOpen
            ? "flex-col"
            : "flex-row hidden md:flex md:w-full md:justify-end "
        } `}
      >
        {Links.map(({ name, link }, index, __self) => (
          <div key={`#{index}-{name} `}>
            <span className="font-bold text-emerald-400">#</span>
            <Link href={link}>{name}</Link>
          </div>
        ))}
      </section>
    </nav>
  );
};
