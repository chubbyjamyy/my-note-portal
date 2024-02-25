interface Comment {
  id: number;
  userId: number;
  noteId: any;
  body: any;
}

const comment: Comment[] = [
  {
    id: 0,
    userId: 1,
    noteId: 0,
    body: "comment about todo list",
  },
  {
    id: 1,
    userId: 1,
    noteId: 1,
    body: "comment about contact list",
  },
  {
    id: 2, 
    userId: 1,
    noteId: 2,
    body: "comment about password list",
  },
];

export default comment;
