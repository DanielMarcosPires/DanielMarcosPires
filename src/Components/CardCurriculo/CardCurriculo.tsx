import React from "react";
import Button from "../Button/Button";
import IconsSVG from "../Icons/IconsSVG";

export default function CardCurriculo() {
  return (
    <li className="flex flex-wrap justify-center">
      <div className="border flex-grow px-2">
        <h3 className="text-lg font-bold">Nome do Certificado:</h3>
        <p>teste</p>
      </div>
      <div className="border flex-grow px-2">
        <h3 className="text-lg font-bold">Tipo do Certificado:</h3>
        <p>teste</p>
      </div>
      <div className="border flex-grow px-2">
        <h3 className="text-lg font-bold">
            <abbr className="decoration-transparent" title="Data de conclusão">D/C</abbr>
            </h3>
        <p>00/00</p>
      </div>
      <div className="border flex justify-center flex-grow gap-2 p-2">
        <Button className="py-3 w-[100px] h-[50px]" variant="primary">Ver mais</Button>
        <Button className="py-3 w-[80px] h-[50px]" variant="secondary">
            <IconsSVG width={25} className="fill-black" iconName={"Edit"} />
        </Button>
      </div>
    </li>
  );
}
