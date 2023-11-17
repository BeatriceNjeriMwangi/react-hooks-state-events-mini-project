import React from "react";

function Task({ task, onDelete}) {
  function handleDelete({}) {
    console.log("I have been clicked:" + task.text);
    onDelete(task.id);
  }
  return (
    <div className="task">
      <p>{task.text}</p>
      <p>{task.category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
