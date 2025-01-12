'use client'

import Image from "next/image"
import Title from "../card/Title"




const Albums = () => {
    const albumsstore = [
        {title: "Hidup Harus Tetap Berjalan",artist:"Bernadya" , image:"/images/artist.jpg"},
        {title: "Hidup Harus Tetap Berjalan",artist:"Bernadya" , image:"/images/juicy.jpg"},
        {title: "Hidup Harus Tetap Berjalan",artist:"Bernadya" , image:"/images/tulus.jpg"},
        {title: "Hidup Harus Tetap Berjalan",artist:"Bernadya" , image:"/images/mahalini.jpg"},
        {title: "Hidup Harus Tetap Berjalan",artist:"Bernadya" , image:"/images/lyodra.jpg"},
    ]
  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl text-white font-bold">
          Popular albums and singles
        </div>
        <div className="text-sm font-semibold cursor-pointer text-neutral-300">
          Show all
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {albumsstore.map((albumsstore, index) =>  (
            <div 
                key={index}
                className="hover:bg-neutral-700 rounded-lg cursor-pointer"
            >
                <div className="mx-auto mt-4 mb-2 md:w-32 md:h-32 2xl:w-48 2xl:h-48 relative">
                  <Image
                  className="rounded-lg"
                    src={albumsstore.image}
                    alt={albumsstore.artist}
                    fill
                  />
                </div>
                <Title title={albumsstore.title} artist={albumsstore.artist}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Albums
