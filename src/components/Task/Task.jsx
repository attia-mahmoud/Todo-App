import { Checkbox } from "../Checkbox";
import cross from "../../assets/images/icon-cross.svg";

const Task = ({ task, handleClick, handleDelete }) => {
  return (
    <div className="task-container" data-status={task.status}>
      <div>
        <Checkbox status={task.status} handleClick={handleClick} />
        <p>{task.name}</p>
      </div>
      <img src={cross} alt="cross" onClick={handleDelete} />
    </div>
  );
};

export { Task };
