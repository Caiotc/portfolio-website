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
      className={`flex rounded-md flex-col md:flex-row justify-around w-full  font-mono `}
    >
      <section className="w-full flex justify-around items-centaer">
        <section className="w-full flex justify-start items-center ">
          <span>my-portfolio-website</span>
        </section>
        <section className="flex justify-end items-center gap-4 sm:flex-wrap ">
          <div className="relative flex justify-center items-center bg-slate-500 w-10 h-10 rounded-lg md:hidden hover:bg-slate-700">
            {isOpen ? (
              <BreadCrumbAtom
                src={close}
                alt=""
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <BreadCrumbAtom
                src={hamburguer}
                alt=""
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </section>
      </section>
      <section
        className={`w-full flex flex-col justify-start gap-2 ${
          isOpen ? "felx" : "hidden"
        } md:flex  md:w-full md:justify-end md:flex-row `}
      >
        {Links.map(({ name, link }, index, __self) => (
          <div
            key={`${index}-${name} `}
            className="flex justify-start items-center"
          >
            <span className="font-bold text-emerald-400 text-2xl">#</span>
            <Link href={link}>{name}</Link>
          </div>
        ))}
      </section>
    </nav>
  );
};
