import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, setFilteredTasks }) {
  // console.log(tasks)

  const [taskList, setTaskList] = useState(tasks)


  function deleteTask(text) {
    console.log(text)
    setFilteredTasks(tasks.filter((task) => {
      return task.text !== text
    }))
  }
console.log(tasks)
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  );
}

export default TaskList;
