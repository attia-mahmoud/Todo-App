import { CollectionRef } from "../Firebase";
import {
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase";

export const getRecords = async (user, setRecords) => {
  const userQuery = query(CollectionRef, where("user_id", "==", user.uid));
  await getDocs(userQuery).then((data) => {
    setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
};

export const filterRecords = (records, key) => {
  if (!key) return records;

  return records.filter((record) => record.status === key.toUpperCase());
};

export const handleClick = async (user, setRecords, task) => {
  const status = task.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
  const docRef = doc(db, "tasks_records", task.id);
  await updateDoc(docRef, { status });
  getRecords(user, setRecords);
};

export const handleDelete = async (user, records, setRecords, task) => {
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
