import React, { ComponentProps } from "react";

export default function Content({children, ...props}:ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
