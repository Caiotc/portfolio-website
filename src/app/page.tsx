/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/atoms/avatar";
import { BreadCrumbAtom } from "@/components/atoms/icons/breadcrumb";
import { Header } from "@/components/moelcules/header";
import { Divider } from "@/components/atoms/divider";
import { Card } from "@/components/moelcules/card";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-10 gap-4 bg-slate-900  text-gray-300  ">
      <Header />
      <div className="w-full h-full flex flex-col gap-10 md:p-10">
        <section className="flex flex-col flex-1 justify-center items-center gap-4 md:flex-row max-w-6xl lg:m-auto  ">
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

        <section className="my-10">
          <Divider title="projects" />

          {/* <section className="my-10 p-4 flex flex-col md:flex-row md:flex-wrap gap-4">
            <Card name="portfolio website" keyWords="tailwind, nextJs, mdx" />
          </section> */}
        </section>

        <section>
          <Divider title="skills" />
        </section>

        <section>
          <Divider title="about-me" />
        </section>

        <section>
          <Divider title="contacts" />
        </section>
      </div>
    </main>
  );
}
