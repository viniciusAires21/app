import { atom } from "recoil";
import { ITarefa } from "interfaces/ITarefa";

export const listaTarefas = atom<ITarefa[]>({
  key: "listaTarefas",
  default: [],
});
