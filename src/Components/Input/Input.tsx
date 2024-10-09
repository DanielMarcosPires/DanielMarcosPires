import React, { ComponentProps } from "react";

export default function Input({ ...props }: ComponentProps<"input">) {
  return (
    <div className="relative px-1 focus-within:opacity-75 focus-within:px-0 transition-all w-full">
      <input
        className="w-full text-xl outline-none bg-transparent py-5 px-5"
        type="text"
        {...props}
      />
    </div>
  );
}
