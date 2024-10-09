/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode } from "react";
import IconsSVG from "../Icons/IconsSVG";

// eslint-disable-next-line prefer-const
let regex = /[^/]+$/;
interface AnchorProps extends ComponentProps<"a"> {
  icon: string;
  href: string;
}
export default function Anchor({
  children,
  icon,
  href,
  ...props
}: AnchorProps) {
  const url = usePathname();
  const linkNow = url === href;
  const name = regex.exec(href);
  console.log(name);
  return (
    <div>
      <div
        className={`flex relative p-5 rounded-2xl justify-center items-center gap-2 ${
          linkNow && "bg-red-500 transition-all"
        }`}
      >
        <Link href={href} {...props}>
          <IconsSVG
            className={` ${!(linkNow) ? "fill-black": "fill-white transition-all"}`}
            width={40}
            iconName={icon}
          />
        </Link>
      </div>
    </div>
  );
}
