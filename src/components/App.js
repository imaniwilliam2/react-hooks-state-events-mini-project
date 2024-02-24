import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


console.log({ CATEGORIES, TASKS });

function App() {

  const [filteredTasks, setFilteredTasks] = useState(TASKS)


  const filterTasks = (category) => {
    if (category === "All") {
      setFilteredTasks(TASKS)
    } else {
      const filtered = TASKS.filter((task) => task.category === category)
      setFilteredTasks(filtered)
    }
  }

  function onTaskFormSubmit(newTask) {
    setFilteredTasks([...filteredTasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} setFilteredTasks={setFilteredTasks}/>
    </div>
  );
}

export default App;
