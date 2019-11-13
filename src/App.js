import React, { useState } from "react";
import "./App.scss";
import TeamList from "./components/TeamMemberList.js";
import Form from "./components/Form.js";

function App() {
  const [team, setTeam] = useState(teamData);
  const [memberToEdit, setmemberToEdit] = useState(null);

  const addMember = member => {
    // console.log(team,member);
    setTeam([...team, member]);
    // console.log("New Team",team);
  };

  const editMember = e => {
    // console.log(e.target.value,team);
    const foundMember = team.find(item => {
      return item.name === e.target.value, team;
    });
  };

  return (
    <div className="App">
      <h1>TEAM LIST</h1>
      <TeamList team={team} editMember={editMember} />
      <Form addMember={addMember} memberToEdit={memberToEdit} />
    </div>
  );
}

const teamData = [
  {
    name: "Jared",
    email: "bobbyiscool@bobbyiscool.com",
    position: "Project Manager"
  },
  {
    name: "Darek",
    email: "bobby@bobbymail.com",
    position: "UI developer"
  },
  {
    name: "Bob",
    email: "bob@bobmail.com",
    position: "Full stack developer"
  }
];

export default App;
