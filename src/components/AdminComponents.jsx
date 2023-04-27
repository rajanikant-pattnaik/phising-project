import { useEffect, useState } from "react"
import {  deleteURL, getAllURL, updateURL } from "./BlakListServices"
import { ipSearch } from "../constant/fetchAPI"
import { getAllFeed } from "./FeedbackServices"




const UserDetails=()=>{
  return <h1>User</h1>
}
const AddToBlacklist=()=>{
    const [array, setarray] = useState([])
    const [values, setvalues] = useState(undefined)
    useEffect(() => {
      getList();
    }, [])
    const handleCheck=async(url)=>{
        console.log(url);
        const data=await ipSearch(url);
        // console.log(data);
        setvalues(data);
        console.log(values)
    }
    const getList=async()=>{
        const data=await getAllURL();
        console.log(data.docs);
        setarray(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    const deleteHandler=async(id)=>{
        await deleteURL(id);
        getList();
    }
    const updateHandler=async(id,url)=>{
        const set=true;
       const newURL={
        url,
        set
       }
       await updateURL(id,newURL);
       getList();
    }
    return (
        <>
        <div className="content-blacklist">
         <section className="cb-1">
         <h1>AddToBlackList</h1>
         {
          // eslint-disable-next-line array-callback-return
          array.map((doc)=>{
              if(doc.set===false)return(
                  <div className="content">
                   <h4>  {doc.url}</h4>
                   <button onClick={(e)=>updateHandler(doc.id,doc.url,doc.set)}>add</button>
                   <button onClick={(e)=>deleteHandler(doc.id)}>remove</button>
                   <button onClick={(e)=>handleCheck(doc.url)}>check</button>
                  </div>
              )
          })
         }
         </section >
         {
          values!==undefined&&values.status==200?(
            <section className="cb-1">
            <p>continent-{values.continent}</p>
            <p>country-{values.country}</p>
            <p>longitude-{values.longitude}</p>
            <p>latitude-{values.latitude}</p>
            <p>organisation-{values.org}</p>
            <p>{values.status}</p>
            </section>
           ):(
            <section className="cb-1">
             <h3>No Values</h3>
            </section>
           )
         }
        </div>
      
       </>
    )
}
const ViewList=()=>{
    const [array, setarray] = useState([])
    useEffect(() => {
      getList();
    }, [])
    const getList=async()=>{
        const data=await getAllURL();
        console.log(data.docs);
        setarray(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    return(
        <div className="content">
        <h1>BlackListed domain are </h1>
       {
        // eslint-disable-next-line array-callback-return
        array.map((doc)=>{
            if(doc.set===true)return(
                <div className="content">
                 <h4>  {doc.url}</h4>
                </div>
            )
        })
       }
        </div>
    )
}
const Feedback=()=>{
    const [array, setarray] = useState([])
    useEffect(() => {
      getList();
    }, [])
    const getList=async()=>{
        const data=await getAllFeed();
        console.log(data.docs);
        setarray(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    return (
        <div className="content">
        <h1>Following feedBacks have been received </h1>
       {
        // eslint-disable-next-line array-callback-return
        array.map((doc)=>{
            return(
                <div className="content">
                 <h4>  {doc.feed}</h4>
                </div>
            )
        })
       }
        </div>
    )
}

export {UserDetails,AddToBlacklist,ViewList,Feedback};

