import React from "react";
import Title from "./components/Title";
import Book from "./components/Book";

const App = () => {

  const user  = [
    { id: 1, name: "top" },
    { id: 2, name: "Chidsanupong" }
  ];



  return (
    <div>
      <Title txt="Easy React" price={500} />

      <Book data={user}>
        <h1>Chidsanuong</h1>
        <p>Posri this is a web</p>
        <button>Click</button>
      </Book>
    </div>
  );
};

export default App;
