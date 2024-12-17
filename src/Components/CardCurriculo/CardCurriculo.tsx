"use client"
import React, { useState } from "react";
import Button from "../Button/Button";
import IconsSVG from "../Icons/IconsSVG";
import Edit from "./Edit/Edit";
import ViewMore from "./ViewMore/ViewMore";

interface CardCurriculoProps {
  name: string;
  type: string;
  data: string;
}

export default function CardCurriculo({
  name,
  type,
  data,
}: CardCurriculoProps) {
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <>
      <li className="flex flex-wrap justify-center py-3">
        <div className="border flex-grow px-2">
          <h3 className="text-lg font-bold">Nome do Certificado:</h3>
          <p>{name}</p>
        </div>
        <div className="border flex-grow 2xl:flex-grow-0 2xl:w-[210px] px-2">
          <h3 className="text-lg font-bold">Tipo do Certificado:</h3>
          <p>{type}</p>
        </div>
        <div className="border flex-grow 2xl:flex-grow-0 2xl:w-[100px] px-2">
          <h3 className="text-lg font-bold">
            <abbr className="decoration-transparent" title="Data de conclusão">
              D/C
            </abbr>
          </h3>
          <p>{data}</p>
        </div>
        <div className="border flex justify-center flex-grow-1 gap-2 p-2">
          <Button onClick={()=>{setIsActiveModal(!isActiveModal)}} className="py-3 w-[100px] h-[50px]" variant="primary">
            Ver mais
          </Button>
          <Button onClick={()=>{setIsActiveEdit(!isActiveEdit)}} className="py-3 w-[80px] h-[50px]" variant="secondary">
            <IconsSVG width={25} className="fill-black" iconName={"Edit"} />
          </Button>
        </div>
      </li>
      {isActiveModal && (<ViewMore/>)}
      {isActiveEdit && (<Edit/>)}
    </>
  );
}
