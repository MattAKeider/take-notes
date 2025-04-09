import { type Note } from '../data/data';

export default function getAllTags(notes: Note[]) {
  const allTags = notes.map(note => note.tags).flat();
  return Array.from(new Set(allTags));
}