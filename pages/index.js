import Image from "next/image";
import data from "../data.json";
function LinkCard({ url: string, title: string, image: string }) {
  return (
    <a
      href={url}
      className="flex items-center p-4 rounded-lg shadow-lg
       hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center mx-auto w-full mt-16">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
      />
      <h1 className="font-semibold mt-4 text-xl">{data.name}</h1>
      {data.links.map((link) => {
        <LinkCard key={link.url} {...link} />;
      })}
    </div>
  );
}
