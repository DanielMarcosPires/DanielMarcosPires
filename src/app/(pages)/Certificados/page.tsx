import React from "react";
import Form from "../../../Components/Form";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import IconsSVG from "@/Components/Icons/IconsSVG";

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
            <div className="flex justify-center text-lg gap-2 px-5">
              <Button type="submit" variant="primary">
                Adicionar
              </Button>
              <Button className="w-[80px]" type="button" variant="secondary">
                <IconsSVG
                  width={40}
                  height={40}
                  className="fill-black"
                  iconName="Filter"
                />
              </Button>
            </div>
          </Form>
        </section>
      </main>
    </div>
  );
}
