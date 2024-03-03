"use client";

import { Fragment, useState } from "react";

import { FaFilter } from "react-icons/fa";
import { AsideModal } from "../AsideProducts/AsideModal";

export function AsideToggle() {
  const [openAside, setOpenAside] = useState(false);

  return (
    <Fragment>
      <div
        className="flex items-center justify-center gap-5 w-48 p-2 shadow-default rounded-lg mx-auto mb-5 cursor-pointer opacity-80 hover:opacity-100 md:hidden"
        onClick={() => setOpenAside(true)}
      >
        <p className="font-medium text-lg">Filtre opções</p>
        <FaFilter size="1.5rem" />
      </div>

      {openAside ? <AsideModal setOpenAside={setOpenAside} /> : null}
    </Fragment>
  );
}
