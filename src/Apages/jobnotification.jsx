import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";

const Jobnotification = () => {
    const [batch1, setBatch1] = useState("");
    const [title1, setTitle1] = useState("");
    const [bodyText1, setBodyText1] = useState("");
    const [name1, setName1] = useState("");

    const postsCollectionRef = collection(db, "Job");
    let navigate = useNavigate();
  
    const createPost1 = async () => {
      await addDoc(postsCollectionRef, {
        batch1,
        title1,
        bodyText1,
        name1,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      navigate("/AlumniHome");
    };
  

  return (
    <div className='createNoticePage'>
      <div className='cpContainer'>
        <h1>Post Job Notification Below</h1>
        <div className='inputGp'>
          <label>Batch, eg.2023:</label>
          <input placeholder="Batch" onChange={(event) => {
              setBatch1(event.target.value);
            }}
            />
        </div>
        <div className='inputGp'>
          <label>Title:</label>
          <textarea placeholder="Title" onChange={(event) => {
              setTitle1(event.target.value);
            }}/>
        </div>
        <div className='inputGp'>
          <label>Body:</label>
          <textarea placeholder="Body" onChange={(event) => {
              setBodyText1(event.target.value);
            }}/>
        </div>
        <div className='inputGp'>
          <label>Name of the Alumni:</label>
          <textarea placeholder="NameAlumni" onChange={(event) => {
              setName1(event.target.value);
            }}/>
        </div>
        <button onClick={createPost1}>Submit Post</button>
      </div>
    </div>
  )
}

export default Jobnotification
