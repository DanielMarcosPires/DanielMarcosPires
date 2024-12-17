import React, { Suspense } from "react";
import Form from "../../../Components/Form";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import IconsSVG from "@/Components/Icons/IconsSVG";
import Service from "./Service/Service";
import { Loader2 } from "lucide-react";

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
        <section>
          <Suspense
            fallback={
              <h2 className="flex justify-center items-center gap-4 text-2xl text-center py-5">
                <Loader2 size={30} color="#ff0000" className="animate-spin" />
                Loading...
              </h2>
            }
          >
            <Service />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
