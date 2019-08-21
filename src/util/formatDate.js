import { format, parseISO } from 'date-fns';

export default function formatDate(date) {
  if (date) {
    const dateISO = parseISO(date);
    return format(dateISO, 'MM/dd/yyyy');
  }
  return null;
}
