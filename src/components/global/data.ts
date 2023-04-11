export const isLoggedIn = true;
export const fName = "Adolf";
export const lName = "Hitler";
export const initials = getInitials(fName, lName);

function getInitials(firstName: string, lastName: string) {
  const firstInitial = firstName.charAt(0);
  const lastInitial = lastName.charAt(0);
  return `${firstInitial}${lastInitial}`;
}

export type NoteListType = {
  id: number;
  ownerId: number;
  ownerNoteId: number;
  noteCreationDate: number;
  notePromptDate?: number;
  noteImg?: string;
  noteTitle: string;
  noteDescription?: string;
  noteContent?: string;
}

export const NoteList: NoteListType[] = [
  {
    id: 0,
    ownerId: 0,
    ownerNoteId: 0,
    noteCreationDate: 100420231949, // ddmmyyyyhhmm
    noteTitle: "Test Note",
    noteDescription: "Test Description",
    noteContent: "Note Content",
  },
]