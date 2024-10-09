import React, { ComponentProps } from "react";

export default function SideBar({children,...props}:ComponentProps<"aside">) {
  return <aside {...props}>{children}</aside>;
}
