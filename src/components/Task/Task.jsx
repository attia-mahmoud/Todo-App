import { Checkbox } from "../Checkbox";
import cross from "../../assets/images/icon-cross.svg";

const Task = ({ task, handleClick, handleDelete }) => {
  return (
    <div className="task-container" data-status={task.status}>
      <div>
        <Checkbox task={task} handleClick={handleClick} />
        <p>{task.name}</p>
      </div>
      <img src={cross} alt="cross" onClick={() => handleDelete(task)} />
    </div>
  );
};

export { Task };
