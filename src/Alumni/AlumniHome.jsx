import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";

import AHeader from "./AHeader";
import "./AlumniHome.css";

const AlumniHome = () => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "Notices");
  const postsCollectionRef1 = collection(db, "Job");

  // // for notice
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getPosts();
  // });

  useEffect(() => {
    const getPosts = async () => {
      const [notices, jobs] = await Promise.all([
        getDocs(postsCollectionRef),
        getDocs(postsCollectionRef1),
      ]);
      setPostList([
        ...notices.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        ...jobs.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      ]);
    };

    getPosts();
  });

  const containerStyle = {
    width: "auto",
    height: "auto",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    padding: "10px",
  };

  const ScrollableContainer1 = {
    height: "400px" /* set the height of the container */,
    width: "300px",
    overflowY: "scroll" /* enable vertical scrolling */,
    border: "1px solid #ccc" /* add a border to the container */,
    padding: "10px" /* add some padding to the container */,
  };

  const ScrollableContainer2 = {
    height: "400px" /* set the height of the container */,
    width: "300px",
    overflowY: "scroll" /* enable vertical scrolling */,
    border: "1px solid #ccc" /* add a border to the container */,
    padding: "10px" /* add some padding to the container */,
  };

  return (
    <div className="homePage">
      <AHeader />
      <li></li>

      <div class="Container" style={ScrollableContainer1}>
        <div
          style={{
            backgroundColor:
              "#f2f2f2" /* set the background color of the box */,
            border: "1px solid #ccc" /* add a border to the box */,
            borderRadius: "50px",
            padding: "10px" /* add some padding to the box */,
          }}
        >
          <h2 style={{ margin: "0" }}>Notice Board</h2>
        </div>

        {postLists.map((post) => {
          return (
            <div style={containerStyle} className="post">
              <div className="postTextContainer">
                <h2>{post.bodyText}</h2>
              </div>
              <h5>
                {post.name}
                {post.batch}
              </h5>
            </div>
          );
        })}
      </div>

      <div class="Container2" style={ScrollableContainer2}>
        <div
          style={{
            backgroundColor:"#f2f2f2" /* set the background color of the box */,
            border: "1px solid #ccc" /* add a border to the box */,
            borderRadius: "50px",
            padding: "10px" /* add some padding to the box */,
          }}
        >
          <h2 style={{ margin: "0" }}>Job Notification</h2>
        </div>

        {postLists.map((post) => {
          return (
            <div style={containerStyle}>
              <div className="post">
                <div className="postTextContainer">
                  <h2>{post.title1}</h2>
                  <h3>{post.bodyText1}</h3>
                </div>
                <h5>
                  {post.name1}
                  {post.batch1}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlumniHome;
