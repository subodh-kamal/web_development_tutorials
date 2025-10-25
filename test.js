const chatMessages = [
  {
    message: "hello Chatbot",
    sender: "user",
    id: "id1",
  },
  {
    message: "Hello! How can I help you?",
    sender: "robot",
    id: "id2",
  },
  {
    message: "can you get me todays date?",
    sender: "user",
    id: "id3",
  },
  {
    message: "Today is August 3",
    sender: "robot",
    id: "id4",
  },
];

console.log(
  chatMessages.map((chat) => {
    // console.log(chat);
    return chat;
  })
);
