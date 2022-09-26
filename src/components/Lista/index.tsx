import { useRecoilValue } from "recoil";
import estilos from "./Lista.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { listaTarefas } from "state/atom";
import classNames from "classnames";
import { useDeletaTarefa } from "state/hooks/useDeletarTarefa";
import { ITarefa } from "interfaces/ITarefa";
import { useConcluirTarefa } from "state/hooks/useConcluirTarefa";
import { BsTrashFill } from "@react-icons/all-files/bs/BsTrashFill";

export function Lista() {
  const tarefas = useRecoilValue(listaTarefas);
  const deletar = useDeletaTarefa();
  const concluir = useConcluirTarefa();

  const concluirTarefa = (tarefa: ITarefa) => {
    try {
      const concluido = {
        id: tarefa.id,
        descricao: tarefa.descricao,
        data: tarefa.data,
        concluido: !tarefa.concluido,
      };
      concluir(concluido);
    } catch (erro) {
      alert(erro);
    }
  };

  const deletarTarefa = (tarefa: ITarefa) => {
    try {
      deletar(tarefa);
    } catch (erro) {
      alert(erro);
    }
  };

  return (
    <div className={estilos.box}>
      {tarefas.map(({ id, descricao, data, concluido }) => (
        <div key={id} className={estilos.box__tarefa}>
          <FormControlLabel
            onClick={() => {
              const tarefa = {
                id: id,
                descricao: descricao,
                data: data,
                concluido: concluido,
              };
              concluirTarefa(tarefa);
            }}
            className={classNames({
              [estilos["box__tarefa-concluida"]]: concluido,
            })}
            value="end"
            control={
              <Checkbox
                title="Concluír Tarefa"
                checked={concluido}
                color="primary"
              />
            }
            label={`${descricao} - ${data}`}
            labelPlacement="end"
          />
          <div className={estilos["box__tarefa-funcoes"]}>
            <div
              className={estilos["box__tarefa-funcoes--delete"]}
              onClick={() => {
                const tarefa = {
                  id: id,
                  descricao: descricao,
                  data: data,
                  concluido: concluido,
                };
                deletarTarefa(tarefa);
              }}
              title="Excluir Tarefa"
            >
              <BsTrashFill />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
