import { useState } from "react";
import { Form } from "components/Form";
import { Lista } from "components/Lista";
import estilo from "./Box.module.scss";

export function Box() {
  return (
    <>
      <div className={estilo.box}>
        <h1 className={estilo.box__titulo}>Lista de Tarefas</h1>
        <Form />
        <Lista />
      </div>
    </>
  );
}
