import React, { ComponentProps } from "react";

export default function Input({ ...props }: ComponentProps<"input">) {
  return (
    <div className="px-1 focus-within:opacity-75 focus-within:px-0 transition-all flex-grow">
      <input
        className="w-full text-xl rounded-lg outline-none bg-transparent py-5 px-4"
        type="text"
        {...props}
      />
    </div>
  );
}
