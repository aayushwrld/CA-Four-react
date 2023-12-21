// the questions which will be asked 
const questions = [
    {
      text: "What is ReactJS?",
      options: [
          { id: 0, text: "Server-side framework", isCorrect: false },
          { id: 1, text: "User interface framework", isCorrect: true },
          { id: 2, text: "Both a and b", isCorrect: false },
          { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "React.js is written in which of the following language?",
      options: [
        { id: 0, text: "C", isCorrect: false },
        { id: 1, text: "C++", isCorrect: false },
        { id: 2, text: "Java", isCorrect: false },
        { id: 3, text: "JavaScript", isCorrect: true },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { id: 0, text: "A permanent storage.", isCorrect: false },
        { id: 1, text: "Internal storage of the component.", isCorrect: true },
        { id: 2, text: "External storage of the component.", isCorrect: false },
        { id: 3, text: "None of the above.", isCorrect: false },
      ],
    },
    {
      text: "What is the return value of the useState hook?",
      options: [
        { id: 0, text: "Pair of current state and function updating it", isCorrect: true },
        { id: 1, text: "Current State", isCorrect: false },
        { id: 2, text: "Function updating the current state", isCorrect: false },
        { id: 3, text: "UseState returns nothing", isCorrect: false },
      ],
    },
    {
      text: "How many elements can a valid react component return?",
      options: [
        { id: 0, text: "1", isCorrect: true },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
      ],
    },
    {
      text: "What is JSX in React?",
      options: [
        { id: 0, text: "A syntax extension for JavaScript", isCorrect: true },
        { id: 1, text: "A new programming language", isCorrect: false },
        { id: 2, text: "A built-in React component", isCorrect: false },
        { id: 3, text: "A type of data storage in React", isCorrect: false },
      ],
    },
    {
        text: "What are React Hooks used for?",
        options: [
          { id: 0, text: "Creating class components", isCorrect: false },
          { id: 1, text: "Managing state and side effects in functional components", isCorrect: true },
          { id: 2, text: "Defining higher-order components", isCorrect: false },
          { id: 3, text: "Styling React components", isCorrect: false },
        ],
      },
      {
        text: "What is the purpose of the useEffect hook in React?",
        options: [
          { id: 0, text: "To handle form submissions", isCorrect: false },
          { id: 1, text: "To perform side effects in functional components", isCorrect: true },
          { id: 2, text: "To create reusable components", isCorrect: false },
          { id: 3, text: "To manage React component state", isCorrect: false },
        ],
      },
      {
        text: "What is the role of Redux in React applications?",
        options: [
          { id: 0, text: "Component styling", isCorrect: false },
          { id: 1, text: "API communication", isCorrect: false },
          { id: 2, text: "Routing", isCorrect: false },
          { id: 3, text: "State management", isCorrect: true },
        ],
      },
      {
        text: "What is the purpose of React Fragments?",
        options: [
          { id: 0, text: "To define conditional rendering", isCorrect: false },
          { id: 1, text: "To manage React component states", isCorrect: false },
          { id: 2, text: "To group multiple components together", isCorrect: true },
          { id: 3, text: "To perform DOM manipulation", isCorrect: false },
        ],
      },
  ];
  
  export default questions;
  