import { db } from "../constant/firebase";
import {
  collection,
  getDocs,
  addDoc,

} from "firebase/firestore";
const FeedBackCollection = collection(db, "feedback");
const addFeed = (url) => {
  return addDoc(FeedBackCollection, url);
};
const getAllFeed = () => {
  return getDocs(FeedBackCollection);
};

export { addFeed,  getAllFeed };
