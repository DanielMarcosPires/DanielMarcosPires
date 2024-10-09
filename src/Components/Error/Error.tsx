import React, { ComponentProps } from "react";

export default function Error({ children, ...props }: ComponentProps<"span">) {
  return <span className="bg-red-500 text-white p-4" {...props}>{children}</span>;
}
