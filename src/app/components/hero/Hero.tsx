'use client'

import Albums from "./Albums"
import Footer from "./Footer"
import Library from "./Library"
import Popular from "./Popular"
import Radio from "./Radio"

const Hero = () => {
  return (
    <div className="flex gap-2 px-2 min-h-[84vh]">
      <div className="w-1/3 rounded-lg h-[85vh]">
        <Library/>
      </div>
      <div className="w-2/3 p-4 bg-neutral-800 rounded-lg h-[85vh] overflow-y-scroll custom-scrollbar">
        <Popular/>
        <Albums/>
        <Radio/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hero
