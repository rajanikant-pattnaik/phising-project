import { db } from "../constant/firebase";
import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";
const blackListCollection=collection(db,'blackListURL');
const addURL=(url)=>{
            return addDoc(blackListCollection,url);
         }
        const  updateURL=(id,url)=>{
            const currURL=doc(db,'blackListURL',id);
            return updateDoc(currURL,url);
         }
         const deleteURL=(id)=>{
             const currURL=doc(db,'blackListURL',id);
             return deleteDoc(currURL);
         }
         const getAllURL=()=>{
             return getDocs(blackListCollection);
         }

export {addURL,updateURL,deleteURL,getAllURL};