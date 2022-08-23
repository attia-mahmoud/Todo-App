import check from "../../assets/images/icon-check.svg";

const Checkbox = ({ task, handleClick }) => {
  return (
    <div id="checkbox" onClick={() => handleClick(task)}>
      {task?.status === "COMPLETED" && <img src={check} alt="check" />}
    </div>
  );
};

export { Checkbox };
