import { InputField } from "../../components/InputField/InputField";
import { TaskList } from "../../components/TaskList/TaskList";
import { Filter } from "../../components/Filter/Filter";
import React, { useContext, useState } from "react";
import { UserContext } from "../../components/App";
import { getRecords } from "../../helpers/utils";

const AuthenticatedScreen = () => {
  const { user } = useContext(UserContext);
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState("");

  React.useEffect(() => {
    getRecords(user, setRecords);
  }, []);

  return (
    <div id="authenticated-screen">
      <InputField setRecords={setRecords} />
      <TaskList records={records} setRecords={setRecords} filter={filter} />
      <Filter setFilter={setFilter} filter={filter} />
      <p id="hint">Drag and drop to reorder list</p>
    </div>
  );
};

export { AuthenticatedScreen };
