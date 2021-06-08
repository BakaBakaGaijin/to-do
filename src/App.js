import React, { useState } from "react";
import Header from "./header";
import Task from "./Task";
import "./App.css";

let array = new Array(9).fill(1);
const Tasks = array.map(() => (<Task />));

//const Tasks = new Array(9).fill((<Task />));
//let Tasks = [];

/*function addTaskToTasks() {
    for (let i = 0; i < 6; i++) {
         Tasks.push(<Task/>);
    }
};*/

function ToDo() {

    //for (let i )
  return (
      <div className="ToDo">
        <Header />
          {Tasks}
      </div>
  );
}

export default ToDo;
