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
};

export const NoteList: NoteListType[] = [
  {
    id: 0,
    ownerId: 0,
    ownerNoteId: 0,
    noteCreationDate: 100420231949, // ddmmyyyyhhmm
    noteTitle: "Test Note",
    noteDescription:
      "A note is a piece of paper or digital document that contains a brief message or reminder. It is usually used for communication between individuals or to serve as a personal reminder for a task or appointment. Notes can be written by hand or typed on a computer or mobile device. They can be simple or detailed, depending on the purpose and the intended recipient. Notes can also be decorated with colors or designs to make them more visually appealing or to convey a certain mood.",
    noteContent: "Note Content",
  },
];
