"use client";
import React, { ComponentProps, useState } from "react";

export default function ButtonModal({
  children,
  ...props
}: ComponentProps<"button">) {
  const [open, isOpen] = useState(false);
  console.log(open);
  return (
    <>
      <button onClick={() => isOpen(!open)} {...props}>
        {children}
      </button>
      <div>
        {open && (
          <>
            <div onClick={() => isOpen(!open)} className="absolute top-0 bg-black/50 w-screen left-0 h-screen text-transparent cursor-pointer">
              Fundo!
            </div>
            <div className="absolute top-0 left-[25%] w-[50%] bg-white h-screen">
                <h2 className="text-2xl">Configuração:</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
}
