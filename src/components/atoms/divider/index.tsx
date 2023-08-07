export const Divider = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-start items-center w-full font-bold text-lg">
      <span className="text-xl text-emerald-600">#</span>
      <span className="flex flex-initial whitespace-nowrap justify-start w-full gap-1 items-center text-lg font-mono font-medium tracking-widest after:content-[''] after:w-full after:h-px after:bg-slate-500">
        {title}
      </span>
      <span className="ml-4 w-1/3 text-sm font-light font-mono hover:text-rose-600 cursor-pointer md:w-20 ">
        {" "}
        View All
      </span>
    </div>
  );
};
