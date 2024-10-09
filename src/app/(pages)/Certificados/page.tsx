import React from "react";
import Form from "../../../Components/Form";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";

export default function Certificados() {
  return (
    <div className="flex justify-center">
      <main className="bg-white w-[80%] h-screen shadow-2xl">
        <header className="py-10 px-5 bg-red-500">
          <h1 className="text-4xl font-bold text-white">Certificados</h1>
        </header>
        <section>
          <Form>
            <Input placeholder="Pesquisar por certificado..." />
            <div className="flex justify-center gap-2 px-5">
              <Button variant="primary">Adicionar</Button>
              <Button variant="secondary">Filter</Button>
            </div>
          </Form>
        </section>
      </main>
    </div>
  );
}
