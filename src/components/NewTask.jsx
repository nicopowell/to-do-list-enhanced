import "../styles/newTask.css";

export const NewTask = () => {
  return (
    <form>
      <div id="task-input-group">
        <label htmlFor="task">Task</label>
        <input type="text" name="task" id="task" placeholder="Your task information" />
      </div>
      <div id="task-date-group">
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" />
      </div>
      <div id="task-tags-group">
        <label htmlFor="tags">Tags</label>
        <select id="tags">
          <option value="">Select a task</option>
          <option value="Work">Work</option>
          <option value="Training">Training</option>
          <option value="College">College</option>
        </select>
      </div>
      <button className="btn btn-red">Add task</button>
    </form>
  );
};
