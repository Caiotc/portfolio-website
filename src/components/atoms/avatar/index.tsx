import { FC } from "react";
import photo from "../../../../public/photo.jpeg";
import Image from "next/image";

async function getData(): Promise<any> {
  const res = await fetch("https://api.github.com/users/caiotc", {
    cache: "force-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // console.log("res", res.json());
  return res.json();
}

const Avatar: FC = async () => {
  const res = await getData();
  console.log(typeof res); //data.foreach((ela) => console.log(ela));

  return (
    <div className="relative  flex  justify-center items-center aspect-square w-60 h-60 sm:w-80 sm:h-80 md:max-w-md md:max-h-md border border-rose-600 rounded-full after:contet-[''] after:border after:border-emerald-600 after:rounded-full after:absolute after:w-1/3 after:h-1/3 after:-left-1 after:-top-0 after:-z-0 p-7">
      <Image
        className="object-cover rounded-full z-10 border-2 border-slate-700"
        alt="icone"
        src={res.avatar_url}
        width={460}
        height={460}
        style={{ width: "100%", height: "100%" }}
      />

      <section className="flex justify-center items-center gap-4 absolute top-3/4 z-10 border border-slate-600 rounded-sm w-full bg-slate-900 p-4 mt-2 before:content-[''] before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full">
        <div className="w-full flex flex-col">
          <span className="font-light text-sm text-slate-400">
            Currently working on:
          </span>
          <span>This Portfolio</span>
        </div>
      </section>
    </div>
  );
};

export { Avatar };
