import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/atoms/avatar";
import { BreadCrumbAtom } from "@/components/atoms/icons/breadcrumb";
import { Header } from "@/components/moelcules/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 gap-20 bg-slate-900  text-gray-300 w-full h-full">
      <Header />

      <section
        className="flex g-
      public set value(v : string) {
        this. = v;
      }
      "
      >
        <span className="flex justify-center items-center">
          Caio Theodoro de Carvarvalho.front end developer
        </span>
        <Avatar />
      </section>
    </main>
  );
}
