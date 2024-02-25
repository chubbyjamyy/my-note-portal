interface Note {
    id: number;
    userId: number;
    title: any;
    body: any;
  }
  
  const note: Note[] = [
    {
      id: 0,
      userId: 1,
      title: "Todo List",
      body: "Things to get it done within this month!"
    },
    {
      id: 1,
      userId: 1,
      title: "Contact list",
      body: "Things to get it done within this month!"
    },
    {
      id: 2,
      userId: 1,
      title: "Password list",
      body: "Things to get it done within this month!"
    }
  ];
  
  export default note;
  