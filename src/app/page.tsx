import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/atoms/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 gap-20 bg-slate-900  text-gray-300 w-full h-full">
      <nav className="flex flex-row justify-between w-full rounded-md px-4 font-mono ">
        <section>my-portfolio-website</section>
        <section className="flex gap-4 sm:flex-wrap">
          <span>
            <span>#</span>
            home
          </span>
          <span>
            <span>#</span>
            works
          </span>
          <span>
            <span>#</span>about-me
          </span>
          <span>
            <span>#</span>contacts
          </span>
        </section>
      </nav>
      <section className="flex flex-row justify-center items-center gap-10 w-full h-full">
        <span className="flex justify-center items-center">
          Caio Theodoro de Carvarvalho.front end developer
        </span>
        <Avatar />
      </section>
    </main>
  );
}
