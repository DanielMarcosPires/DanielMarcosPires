/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";

export default function Home() {
  const url = usePathname();
  console.log(url);
  return (
    <main className="flex  justify-center border w-full">
      
    </main>
  );
}
