import { useState, useContext } from "react";
import { addDoc } from "firebase/firestore";
import { CollectionRef } from "../../Firebase";
import { UserContext } from "../App.js";
import { Checkbox } from "../Checkbox";
import { getRecords } from "../../helpers/utils";

const InputField = ({ setRecords }) => {
  const [task, setTask] = useState("");
  const { user } = useContext(UserContext);

  const handleKeyPress = async (e) => {
    if (e.key !== "Enter") return;

    setTask("");
    const entry = {
      user_id: user.uid,
      name: task,
      status: "ACTIVE",
    };
    await addDoc(CollectionRef, entry);
    getRecords(user, setRecords);
  };

  return (
    <div id="input-field">
      <Checkbox />
      <input
        placeholder="Create a new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export { InputField };
