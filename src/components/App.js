import React from "react";
import Header from "./Header";
import PlayerList from "./PlayersList";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <PlayerList />
      <AddPlayerForm />
    </div>
  );
};

export default App;
