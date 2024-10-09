import React, { ComponentProps } from "react";

export default function form({ children, ...props }: ComponentProps<"form">) {
  return (
    <section className="flex border justify-center w-full px-5">
      <form className="flex w-full py-5" {...props}>
        {children}
      </form>
    </section>
  );
}
