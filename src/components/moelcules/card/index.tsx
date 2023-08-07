async function getData(): Promise<Array<Record<string, string>>> {
  const res = await fetch("https://api.github.com/users/caiotc/repos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // console.log("res", res.json());
  return res.json();
}

export const Card = async ({
  name,
  keyWords,
}: {
  name: string;
  keyWords: string;
}) => {
  return (
    <div className="flex flex-col border w-full md:w-1/4">
      <section className=" border">{name}</section>
      <section className="border font-light text-sm p-1">{keyWords}</section>
      <section className="border p-4">
        content <section>Titulo</section>
        <section className="border">actions</section>
      </section>
    </div>
  );
};
