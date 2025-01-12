'use client'

import Image from "next/image"

const Popular = () => {
  const artists = [
    { name: "Bernadya", image: "/images/artist.jpg" },
    { name: "Juicy Luicy", image: "/images/juicy.jpg" },
    { name: "Tulus", image: "/images/tulus.jpg" },
    { name: "Mahalini", image: "/images/mahalini.jpg" },
    { name: "Lyodra", image: "/images/lyodra.jpg" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-2xl text-white font-bold">
          Popular Artists
        </div>
        <div className="text-sm font-semibold cursor-pointer text-neutral-300">
          Show all
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4">
        {artists.map((artist, index) => (
          <div 
            key={index} 
            className="px-4 pb-3 flex flex-col items-center justify-center hover:bg-neutral-700 rounded-lg cursor-pointer"
          >
            <div className="md:w-32 md:h-32 2xl:w-48 2xl:h-48 relative">
              <Image
                className="rounded-full object-cover"
                src={artist.image}
                alt={artist.name}
                fill
              />
            </div>
            <div className="self-start text-white mt-2 text-sm font-medium">
              {artist.name}
              <div className="font-light text-gray-400">
                Artist
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
