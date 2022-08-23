const Filter = ({ setFilter, filter }) => {
  const handleClick = (val) => {
    setFilter(val);
  };

  const options = ["", "Active", "Completed"];

  return (
    <div id="filter">
      {options.map((option) => (
        <p
          style={{
            color: filter === option.toUpperCase() && "hsl(220, 98%, 61%)",
          }}
          onClick={() => handleClick(option.toUpperCase())}
        >
          {option || "All"}
        </p>
      ))}
    </div>
  );
};

export { Filter };
