"use client";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="px-3 text-md font-bold bg-white text-black rounded-full min-w-full min-h-full">
      {title}
    </button>
  );
};

export default Button;
