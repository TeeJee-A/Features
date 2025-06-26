"use client";

import Carousel from "@/components/carousel";

type Card = {
  name: string;
  collection: string;
  gradient: string;
};

const cards: Card[] = [
  {
    name: "1",
    collection: "Abstract Collection",
    gradient: "from-gray-900 via-black to-gray-800",
  },
  {
    name: "2",
    collection: "Modern Art Series",
    gradient: "from-slate-900 via-gray-900 to-black",
  },
  {
    name: "3",
    collection: "Cyber Collection",
    gradient: "from-black via-gray-900 to-slate-800",
  },
  {
    name: "4",
    collection: "Dark Series",
    gradient: "from-gray-800 via-black to-gray-900",
  },
  {
    name: "5",
    collection: "Mystery Box",
    gradient: "from-black via-slate-900 to-gray-800",
  },
  {
    name: "6",
    collection: "Mystery Box",
    gradient: "from-black via-slate-900 to-gray-800",
  },
  {
    name: "7",
    collection: "Mystery Box",
    gradient: "from-black via-slate-900 to-gray-800",
  },
  {
    name: "8",
    collection: "Mystery Box",
    gradient: "from-black via-slate-900 to-gray-800",
  },
];

export default function Home() {
  return (
    <div>
      <Carousel visibleRange={2} />
    </div>
  );
}
