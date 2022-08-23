import check from "../../assets/images/icon-check.svg";

const Checkbox = ({ status, handleClick }) => {
  return (
    <div id="checkbox" onClick={handleClick}>
      {status === "COMPLETED" && <img src={check} alt="check" />}
    </div>
  );
};

export { Checkbox };
