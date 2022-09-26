import { useSetRecoilState } from "recoil";
import { ITarefa } from "interfaces/ITarefa";
import { listaTarefas } from "state/atom";

export const useConcluirTarefa = () => {
  const setListaTarefa = useSetRecoilState<ITarefa[]>(listaTarefas);

  return (tarefa: ITarefa) => {
    return setListaTarefa((listaAtual) => {
      const indice = listaAtual.findIndex(
        (tarefaEscolhida) => tarefaEscolhida.id === tarefa.id
      );
      return [
        ...listaAtual.slice(0, indice),
        tarefa,
        ...listaAtual.slice(indice + 1),
      ];
    });
  };
};
