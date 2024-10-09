import Error from "@/Components/Error/Error";
import React from "react";

 export default  function NotFound() {
  return (
    <main className="flex justify-center items-center border border-red-500 h-screen">
      <h2 className="text-4xl"><Error>Erro 404</Error>: Página não encontrado!</h2>
    </main>
  );
}
