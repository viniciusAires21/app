import { useSetRecoilState } from "recoil";
import { ITarefa } from "interfaces/ITarefa";
import { listaTarefas } from "state/atom";

export const useDeletaTarefa = () => {
  const setListaTarefa = useSetRecoilState<ITarefa[]>(listaTarefas);

  return (tarefa: ITarefa) => {
    setListaTarefa((listaAtual) => [
      ...listaAtual.filter(
        (tarefaEscolhida) => tarefaEscolhida.id !== tarefa.id
      ),
    ]);
  };
};
