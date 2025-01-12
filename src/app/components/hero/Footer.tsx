"use client";

import { BiCopyright } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div className="w-3/4">
          <div className="grid grid-cols-4">
            <div>
              <h1 className="font-bold text-white">Company</h1>
              <div className="mt-1 text-neutral-400 cursor-pointer">
                <p className="hover:text-white hover:underline">About</p>
                <p className="my-1 hover:text-white hover:underline">Jobs</p>
                <p className="hover:text-white hover:underline">
                  For the Record
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white">Communities</h1>
              <div className="mt-1 text-neutral-400 cursor-pointer">
                <p className="hover:text-white hover:underline">For Artist</p>
                <p className="my-1 hover:text-white hover:underline">
                  Developers
                </p>
                <p className="hover:text-white hover:underline">Advertising</p>
                <p className="my-1 hover:text-white hover:underline">
                  Investors
                </p>
                <p className="hover:text-white hover:underline">Vendors</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white">Useful link</h1>
              <div className="mt-1 text-neutral-400 cursor-pointer">
                <p className="hover:text-white hover:underline">Support</p>
                <p className="mt-1 hover:text-white hover:underline">
                  Free Mobile App
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white">Spotify Plans</h1>
              <div className="mt-1 text-neutral-400 cursor-pointer">
                <p className="hover:text-white hover:underline">
                  Premium Individual
                </p>
                <p className="my-1 hover:text-white hover:underline">
                  Premium Duo
                </p>
                <p className="hover:text-white hover:underline">
                  Premium Family
                </p>
                <p className="my-1 hover:text-white hover:underline">
                  Premium Student
                </p>
                <p className="hover:text-white hover:underline">Spotify Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex justify-center gap-4 text-white">
          <div className="h-8 hover:bg-neutral-400 flex justify-center items-center w-8 bg-neutral-700 rounded-full">
            <FaInstagram />
          </div>
          <div className="h-8 hover:bg-neutral-400 flex justify-center items-center w-8 bg-neutral-700 rounded-full">
            <FaTwitter />
          </div>
          <div className="h-8 hover:bg-neutral-400 flex justify-center items-center w-8 bg-neutral-700 rounded-full">
            <FaFacebook />
          </div>
        </div>
      </div>
      <hr className="mt-10 text-neutral-300"/>
      <div className="flex items-center gap-2 text-neutral-300 mt-10 mb-12">
        <BiCopyright/> 2025 Spotify AB
      </div>
    </div>
  );
};

export default Footer;
