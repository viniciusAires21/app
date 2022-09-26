import { useState } from "react";
import estilo from "./Form.module.scss";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAdicionarTarefa } from "state/hooks/useAdicionarTarefa";
import { formatData } from "util/formatData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: "40%",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

export function Form() {
  const classe = useStyles();
  const adicionar = useAdicionarTarefa();

  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");

  const adicionarTarefa = () => {
    try {
      const tarefa = {
        descricao: descricao,
        data: formatData(data),
        concluido: false,
      };
      if (descricao.length === 0 || data.length === 0) {
        setAviso(true);
        return;
      }
      setAviso(false);
      adicionar(tarefa);
      setDescricao("");
      setData("");
    } catch (erro) {
      alert(erro);
    }
  };

  const [aviso, setAviso] = useState(false);

  return (
    <>
      {aviso && <p className={estilo.aviso}>Preencha todos os campos!</p>}
      <form className={estilo.form}>
        <TextField
          id="outlined-basic"
          label="Descreva a tarefa"
          variant="standard"
          value={descricao}
          margin="dense"
          style={{ width: "50%" }}
          onChange={(e) => setDescricao(e.target.value)}
          error={aviso}
        />
        <div className={classe.container}>
          <TextField
            id="date"
            label="Data"
            value={data}
            type="date"
            className={classe.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setData(e.target.value)}
            error={aviso}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1em", width: "95%" }}
          onClick={adicionarTarefa}
        >
          Adicionar
        </Button>
      </form>
    </>
  );
}
