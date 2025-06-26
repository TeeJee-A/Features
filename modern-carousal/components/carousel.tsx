"use client";

import { useState } from "react";

// Define the type for the card
type Card = {
  name: string;
  collection: string;
};

// import your Array of cards here
const cards: Card[] = [
  {
    name: "1",
    collection: "Abstract Collection",
  },
  {
    name: "2",
    collection: "Modern Art Series",
  },
  {
    name: "3",
    collection: "Cyber Collection",
  },
  {
    name: "4",
    collection: "Dark Series",
  },
  {
    name: "5",
    collection: "Mystery Box",
  },
];

export default function Carousel({
  visibleRange,
  showDots = true,
  showButtons = true,
}: {
  visibleRange: number;
  showDots?: boolean;
  showButtons?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + cards.length) % cards.length;
    if (position === 0) {
      return {
        transform: "translateX(0) translateY(0) scale(1)",
        zIndex: 30,
        opacity: 1,
      };
    }
    if (position <= visibleRange) {
      return {
        transform: `translateX(${position * 100 + 40}px) translateY(${
          position * 20
        }px) scale(${1 - position * 0.1})`,
        zIndex: 30 - position,
        opacity: 1 - position * 0.2,
        rotate: `${position * 5}deg`,
      };
    }
    const leftPos = cards.length - position;
    if (leftPos <= visibleRange) {
      return {
        transform: `translateX(-${leftPos * 100 + 40}px) translateY(${
          leftPos * 20
        }px) scale(${1 - leftPos * 0.1})`,
        zIndex: 30 - leftPos,
        opacity: 1 - leftPos * 0.2,
        rotate: `${leftPos * -5}deg`,
      };
    }
    return {
      transform: "translateX(0) translateY(0) scale(0.7)",
      zIndex: 0,
      opacity: 0,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="relative w-full h-96 flex items-center justify-center">
        <div className="relative w-80 h-80  ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-slate-500 rounded-3xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden`}
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">
                    {card.name}
                  </h3>
                  <p className="text-white/70 text-sm font-medium tracking-wider">
                    {card.collection}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 mt-8 justify-center items-center">
        {showButtons && (
          <button
            onClick={() => prevSlide()}
            className="w-10 h-10 bg-black rounded-full cursor-pointer"
          >
            {"<"}
          </button>
        )}
        {showDots &&
          cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        {showButtons && (
          <button
            onClick={() => nextSlide()}
            className="w-10 h-10 bg-black rounded-full cursor-pointer"
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}
