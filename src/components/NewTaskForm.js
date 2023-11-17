import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0]);
  const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({
      text: taskText,
      category: taskCategory
    });
    setTaskText('');
    setTaskCategory(categories[0]);
  };
  return (
    <form className="new-task-form" onSubmit={handleTaskFormSubmit}>
      <label>
        Task:
        <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
        </label>
        <label>
        <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}

        </select>


          
      
      </label>
      <button type="submit" value="Add task">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
