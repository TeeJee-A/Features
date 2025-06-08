'use client';

import { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const nftCards = [
  {
    id: 1,
    name: '1',
    collection: 'Abstract Collection',
    gradient: 'from-gray-900 via-black to-gray-800',
  },
  {
    id: 2,
    name: '2',
    collection: 'Modern Art Series',
    gradient: 'from-slate-900 via-gray-900 to-black',
  },
  {
    id: 3,
    name: '3',
    collection: 'Cyber Collection',
    gradient: 'from-black via-gray-900 to-slate-800',
  },
  {
    id: 4,
    name: '4',
    collection: 'Dark Series',
    gradient: 'from-gray-800 via-black to-gray-900',
  },
  {
    id: 5,
    name: '5',
    collection: 'Mystery Box',
    gradient: 'from-black via-slate-900 to-gray-800',
  },
  {
    id: 6,
    name: '6',
    collection: 'Mystery Box',
    gradient: 'from-black via-slate-900 to-gray-800',
  },
  {
    id: 7,
    name: '7',
    collection: 'Mystery Box',
    gradient: 'from-black via-slate-900 to-gray-800',
  },
  {
    id: 8,
    name: '8',
    collection: 'Mystery Box',
    gradient: 'from-black via-slate-900 to-gray-800',
  },
];

export default function NFTCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nftCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + nftCards.length) % nftCards.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + nftCards.length) % nftCards.length;

    if (position === 0) {
      // Center card
      return {
        transform: 'translateX(0) translateY(0) rotateY(0deg) scale(1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (position === 1) {
      // Right card
      return {
        transform: 'translateX(140px) translateY(30px) rotateY(0deg) scale(0.85)',
        zIndex: 20,
        opacity: 0.8,
        rotate: '5deg',
      };
    } else if (position === 2) {
      // Right card
      return {
        transform: 'translateX(240px) translateY(50px) rotateY(0deg) scale(0.85)',
        zIndex: 10,
        opacity: 0.5,
        rotate: '10deg',
      };
    } else if (position === nftCards.length - 1) {
      // Left card
      return {
        transform: 'translateX(-140px) translateY(30px) rotateY(0deg) scale(0.85) ',
        zIndex: 20,
        opacity: 0.8,
        rotate: '-5deg',
      };
    } else if (position === nftCards.length - 2) {
      // Left card
      return {
        transform: 'translateX(-240px) translateY(50px) rotateY(0deg) scale(0.85) ',
        zIndex: 20,
        opacity: 0.5,
        rotate: '-10deg',
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(0) translateY(0) rotateY(0deg) scale(0.7)',
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="relative w-full h-96 flex items-center border border-black justify-center">
        <div className="relative w-80 h-80  ">
          {nftCards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${card.gradient} rounded-3xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden`}
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Abstract background elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-8 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/30 rounded-lg" />
                  </div>
                </div>

                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">{card.name}</h3>
                  <p className="text-white/70 text-sm font-medium tracking-wider">
                    {card.collection}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex space-x-2 mt-8">
        {nftCards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
