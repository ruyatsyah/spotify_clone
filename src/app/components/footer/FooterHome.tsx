"use client";

import Button from "../Button";

const FooterHome = () => {
  return (
    <div className="p-2">
      <div className="py-3 px-4 flex justify-between bg-gradient-to-r from-pink-500 to-blue-500 text-white">
        <div>
          <p className="text-sm font-bold">Preview of Spotify</p>
          <p className="text-md ">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <div className="h-11 w-36">
          <Button title="Sign up for free" />
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
