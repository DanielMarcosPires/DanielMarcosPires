/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const url = usePathname();
  console.log(url);
  return (
    <main className="flex  justify-center border w-full">
      <div className="bg-white w-2/3 h-screen">
        <header className="border flex items-center h-[8.75rem]">
          <h2 className="text-4xl pl-2">Meus Hobbies:</h2>
        </header>
        <nav className="flex justify-end items-center border">
            <form className="border flex-grow-[8] py-2 border-red-500" action="">
                <input type="text" className="w-full h-full" placeholder="Pesquisar" />
            </form>
            <Link className="border bg-red-500 text-white p-2 text-center w-[150px]" href={""}>Adicionar</Link>
            <Link className="border p-2 text-center w-[150px]" href={""}>Filtro</Link>
        </nav>
        <div className="overflow-y-scroll">

        </div>
      </div>
    </main>
  );
}
