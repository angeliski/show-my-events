import moment from 'moment';

const formatDate = date => moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');

const formatDateTime = (date, time) => moment(`${date} ${time}`, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DDTHH:mm');

const toEvent = ({
  data, titulo, horarioInicio, ...others
}) => ({
  id: titulo.toLowerCase().replace(/\s/g, '-'),
  textColor: 'white',
  title: titulo,
  start: horarioInicio ? formatDateTime(data, horarioInicio) : formatDate(data),
  data,
  horarioInicio,
  ...others,
});

export const transform = events => events.map(toEvent);
export const noop = () => null;
