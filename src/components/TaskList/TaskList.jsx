import React, { useContext } from "react";
import { db } from "../../Firebase";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Task } from "../Task";
import { UserContext } from "../App.js";
import { getRecords, filterRecords } from "../../helpers/utils";

const TaskList = ({ records, setRecords, filter }) => {
  const { user } = useContext(UserContext);

  const handleClick = async (task) => {
    const status = task.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
    const docRef = doc(db, "tasks_records", task.id);
    await updateDoc(docRef, { status });
    getRecords(user, setRecords);
  };

  const handleDelete = async (task) => {
    if (task) {
      const docRef = doc(db, "tasks_records", task.id);
      await deleteDoc(docRef);
    } else {
      const completedTasks = records.filter(
        (record) => record.status === "COMPLETED"
      );
      for (let i = 0; i < completedTasks.length; i++) {
        const docRef = doc(db, "tasks_records", completedTasks[i].id);
        await deleteDoc(docRef);
      }
    }
    getRecords(user, setRecords);
  };

  return (
    <div id="tasks-container">
      <div>
        {filterRecords(records, filter)?.map((task, i) => (
          <Task
            task={task}
            key={i}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div id="tasks-footer">
        <p>{`${filterRecords(records, "ACTIVE")?.length} items left`}</p>
        <p onClick={() => handleDelete()}>Clear Completed</p>
      </div>
    </div>
  );
};
export { TaskList };
