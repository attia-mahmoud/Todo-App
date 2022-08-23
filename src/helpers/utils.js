import { CollectionRef } from "../Firebase";
import { getDocs, query, where } from "firebase/firestore";

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
