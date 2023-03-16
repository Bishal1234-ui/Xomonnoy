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
    width: "200px",
    height: "200px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    padding: "10px",
  };

  return (
    <div className="homePage">
      <AHeader />
      <div class="max-w-md mx-auto mt-4 overflow-y-scroll max-h-80 border border-gray-200 p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            NOTICE
          </h2>

          {postLists.map((post) => {
            return (
              <div style={containerStyle}>
                <div className="post">
                  <div className="postTextContainer">
                    {" "}
                    <h2>{post.bodyText}</h2>{" "}
                  </div>
                  <h5>
                  {post.name}
                  {post.batch}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      
      <div class="max-w-md mx-auto mt-4 overflow-y-scroll max-h-80 border border-gray-200 p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            Job Notification
          </h2>

          {postLists.map((post) => {
            return (
              <div style={containerStyle}>
                <div className="post">
                  <div className="postTextContainer">
                    {" "}
                    <h2>{post.title1}</h2>{" "}
                    <h3>{post.bodyText1}</h3>{" "}
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
    </div>
  );
};

export default AlumniHome;
