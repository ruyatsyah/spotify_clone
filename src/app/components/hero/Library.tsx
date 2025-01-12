"use client";

import { BiPlus } from "react-icons/bi";
import { SiWikibooks } from "react-icons/si";
import Card from "../card/Card";
import Button from "../Button";
import FooterLibrary from "../footer/FooterLibrary";


const Library = () => {
  return (
    <div className="py-4 text-white bg-neutral-800 rounded-lg h-[85vh]">
      <div className="px-4 flex text-xl font-bold justify-between h-[12vh]">
        <div className="flex items-center cursor-pointer gap-3">
          <SiWikibooks /> Your Library
        </div>
        <div className="flex items-center cursor-pointer">
          <BiPlus />
        </div>
      </div>
      <div className="px-2 h-[30vh] custom-scrollbar">
        <div className="mt-2 bg-neutral-700 p-4 rounded-lg">
          <Card title="Create your first playlist" subtitle="It's easy, we'll help you" />
          <div className="w-32 h-8 text-sm mt-4">
            <Button title="Create playlist" />
          </div>
        </div>
        <div className="mt-6 mb-6 bg-neutral-700 p-4 rounded-lg">
          <Card title="Create your first playlist" subtitle="It's easy, we'll help you" />
          <div className="w-fit h-8 text-sm mt-4">
            <Button title="Browse podcast" />
          </div>
        </div>
      </div>
      <div>
        <FooterLibrary />
      </div>
    </div>
  );
};

export default Library;
