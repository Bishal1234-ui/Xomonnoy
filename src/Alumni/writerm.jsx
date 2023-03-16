import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";

const Writerm = () => {
    const [batch2, setBatch2] = useState("");
    const [title2, setTitle2] = useState("");
    const [bodyText2, setBodyText2] = useState("");
    const [name2, setName2] = useState("");

    const postsCollectionRef = collection(db, "Stories");
    let navigate = useNavigate();
  
    const createPost2 = async () => {
      await addDoc(postsCollectionRef, {
        batch2,
        title2,
        bodyText2,
        name2,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      navigate("/AlumniHome");
    };
  

  return (
    <div className='createNoticePage'>
      <div className='cpContainer'>
        <h1>Write your Memories Below</h1>
        <div className='inputGp'>
          <label>Batch, eg.2023:</label>
          <input placeholder="Batch" onChange={(event) => {
              setBatch2(event.target.value);
            }}
            />
        </div>
        <div className='inputGp'>
          <label>Title:</label>
          <textarea placeholder="Title" onChange={(event) => {
              setTitle2(event.target.value);
            }}/>
        </div>
        <div className='inputGp'>
          <label>Body:</label>
          <textarea placeholder="Stories" onChange={(event) => {
              setBodyText2(event.target.value);
            }}/>
        </div>
        <div className='inputGp'>
          <label>Name of the Alumni:</label>
          <textarea placeholder="NameAlumni" onChange={(event) => {
              setName2(event.target.value);
            }}/>
        </div>
        <button onClick={createPost2}>Submit Post</button>
      </div>
    </div>
  )
}

export default Writerm;
