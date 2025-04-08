export default function formatNoteCardDate(date: string) {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString('default', { month: 'short' });
  return `${dateObj.getDate()} ${month} ${dateObj.getFullYear()}`;
}