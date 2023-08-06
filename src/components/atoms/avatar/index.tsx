import { FC } from "react";
import photo from "../../../../public/photo.jpeg";
import Image from "next/image";

const Avatar: FC = () => {
  return (
    <div className="relative flex justify-center items-center  aspect-square border border-black rounded-full after:contet-[''] after:border after:border-t-zinc-400 after:rounded-full after:absolute after:w-16 after:h-16 after:left-7 after:-top-0 after:-z-0">
      <Image
        className="rounded-full p-8 z-10"
        alt="icone"
        src={photo}
        style={{ width: "18rem", height: "100%" }}
      />
    </div>
  );
};

export { Avatar };
