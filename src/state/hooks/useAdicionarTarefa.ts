import { useSetRecoilState } from "recoil";
import { ITarefa } from "interfaces/ITarefa";
import { obterId } from "util/obterId";
import { listaTarefas } from "state/atom";

export const useAdicionarTarefa = () => {
  const setListaTarefa = useSetRecoilState<ITarefa[]>(listaTarefas);

  return (tarefa: ITarefa) => {
    tarefa.id = obterId();
    return setListaTarefa((listaAtual) => [...listaAtual, tarefa]);
  };
};
