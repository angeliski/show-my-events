import moment from 'moment';

const formatDate = date => moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');

const formatDateTime = (date, time) => moment(`${date} ${time}`, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DDTHH:mm');

// const toEvent = ({
//   data, titulo, horarioInicio, ...others
// }) => ({
//   id: titulo.toLowerCase().replace(/\s/g, '-'),
//   textColor: 'white',
//   title: titulo,
//   start: horarioInicio ? formatDateTime(data, horarioInicio) : formatDate(data),
//   data,
//   horarioInicio,
//   ...others,
// });


const toEvent = (eventArray) => {
  const id=  eventArray[0];
  const data = eventArray[1];
  const title = eventArray[2];
  const descricao = eventArray[3];
  const textColor =  'white';
  const horarioInicio = eventArray[4];
  const horarioFim = eventArray[5];
  const local = eventArray[6];
  const link = eventArray[7];
  const imagem = eventArray[8];
  const autor = eventArray[9];
  const tipoEvento = eventArray[10];

  const start = horarioInicio ? formatDateTime(data, horarioInicio) : formatDate(data);

  return {
    id,
    textColor,
    title,
    descricao,
    start,
    data,
    horarioInicio,
    horarioFim,
    local,
    link,
    imagem,
    autor, 
    tipoEvento
  }
}


export const transform = events => events.slice(1).map(toEvent);
export const noop = () => null;
