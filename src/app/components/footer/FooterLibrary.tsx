"use client";

import TextStyle from "./TextStyle";
import { BiGlobe } from "react-icons/bi";

const FooterLibrary = () => {
  return (
    <div className="px-4 mt-10">
      <div className="flex flex-wrap gap-4 mr-12 font-light">
        <TextStyle title="Legal" />
        <TextStyle title="Safety & Privacy Center" />
        <TextStyle title="Privacy Policy" />
        <TextStyle title="Cookies" />
        <TextStyle title="About Us" />
        <TextStyle title="Accessibility" />
      </div>
      <div className="font-bold mt-4 w-fit">
        <TextStyle title="Cookies"/>
      </div>
      <button className="flex items-center gap-2 mt-8 border px-3 py-1 rounded-full text-sm font-semibold">
        <BiGlobe/> English
      </button>
    </div>
  );
};

export default FooterLibrary;
