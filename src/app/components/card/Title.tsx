'use client'
import React from "react";

interface TitleProps {
  title: string;
  artist: string;
}

const Title: React.FC<TitleProps> = ({ title, artist }) => {
  return (
    <div className="px-3 pb-3 text-white">
      <div className="font-medium">{title}</div>
      <div className="font-light">{artist}</div>
    </div>
  );
};

export default Title;
