import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "border rounded-lg w-[200px] font-bold hover:opacity-90",
  variants: {
    variant: {
      primary: "bg-red-500 text-white",
      secondary: "hover:bg-black/5",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;
export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <div className={button({ className, variant })}>
      <button
        className="h-full w-full flex justify-center items-center"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
