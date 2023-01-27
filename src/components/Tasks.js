import Task from './Task';

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <div className="tasks-cont">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default Tasks;
