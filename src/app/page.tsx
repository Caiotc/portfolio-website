/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/atoms/avatar";
import { BreadCrumbAtom } from "@/components/atoms/icons/breadcrumb";
import { Header } from "@/components/moelcules/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-10 bg-slate-900  text-gray-300  ">
      <Header />

      <section className="flex flex-col flex-1 justify-center items-center gap-4 md:flex-row  ">
        <span className="flex flex-col justify-start items-center h-full w-full gap-3 ">
          <h1 className="w-full font-bold uppercase text-sm">
            <span> Hello my name is Caio. I'm a </span>
            <span className="text-rose-600 font-bold uppercase text-md inline-block">
              fullstack software engineer
            </span>
            <span> and a </span>
            <span className="text-rose-600 font-bold uppercase text-md inline-block">
              front-end especialist
            </span>
          </h1>
          <span className="w-full font-light text-sm">
            {" "}
            Coding is my passion blabla bleblu ble
          </span>
          <section className="w-full">
            <button className="border border-emerald-950 bg-slate-950 rounded-lg p-4">
              Contact me
            </button>
          </section>
        </span>
        <Avatar />
      </section>

      <section></section>
    </main>
  );
}
