import React, { ComponentProps } from "react";

export default function form({ children, ...props }: ComponentProps<"form">) {
  return (
    <section className="flex justify-center w-full">
      <form className="flex border w-full py-5" {...props}>
        {children}
      </form>
    </section>
  );
}
