"use server";

import CardCurriculo from "@/Components/CardCurriculo/CardCurriculo";
import { RunPortifolio } from "@/db/mongoDB";
import { WithId } from "mongodb";
import React from "react";

interface RunPortifolioProps {
  Certificados: {
    List: [
      {
        Certificado: {
          id: number;
          name: string;
          type: string;
          data: string;
        };
      }
    ];
  };
}

export default async function Service() {
  try {
    const info = await RunPortifolio({
      db: "Portifolio",
      collection: "portifolio",
    });
    const items = info as WithId<RunPortifolioProps>[];
    const list = items[0].Certificados.List;
    return (
      <ul className="flex flex-col gap-2 py-2 px-7 ">
        <div>
          <p>
            Encontrado: {list.length}/{list.length}
          </p>
          <hr />
        </div>
        <div className="gap-2 h-screen overflow-y-scroll">
          {list.map(({ Certificado }) => (
            <CardCurriculo
              key={Certificado.id}
              name={Certificado.name}
              type={Certificado.type}
              data={Certificado.type}
            />
          ))}
        </div>
      </ul>
    );
  } catch (error) {
    console.log(error);
    return (
      <h2 className="text-3xl border text-center h-full">Falha ao Carregar!</h2>
    );
  }
}
