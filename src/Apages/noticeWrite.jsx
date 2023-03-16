
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";

const NoticeWrite = () => {
  const [batch, setBatch] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [name, setName] = useState("");


  const postsCollectionRef = collection(db, "Notices");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      batch,
      bodyText,
      name,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/AlumniHome");
  };

 

  return (
    <div className='createNoticePage'>
      <div className='cpContainer'>
        <h1>Write the NOTICE Below</h1>
        <div className='inputGp'>
          <label>Batch, eg.2023:</label>
          <input placeholder="Batch" onChange={(event) => {
              setBatch(event.target.value);
            }}
            />
        </div>
        <div className='inputGp'>
          <label>Body:</label>
          <textarea placeholder="Body" onChange={(event) => {
              setBodyText(event.target.value);
            }}/>
        </div>
        <div className='inputGp'>
          <label>Name of the Alumni:</label>
          <textarea placeholder="NameAlumni" onChange={(event) => {
              setName(event.target.value);
            }}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default NoticeWrite
