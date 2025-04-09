export default function formatNoteCardDate(date: string) {
  if (!date) {
    throw new Error('Invalid date value given');
  }

  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString('default', { month: 'short' });
  return `${dateObj.getDate()} ${month} ${dateObj.getFullYear()}`;
}