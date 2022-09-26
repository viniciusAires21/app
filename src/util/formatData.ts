export const formatData = (data: string) => {
  const ano = data.substring(0, 4);
  const mes = data.substring(5, 7);
  const dia = data.substring(8, 11);

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
};
