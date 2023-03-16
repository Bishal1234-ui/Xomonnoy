import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";
import Header from "../component/Header";
const RmMemories = () => {
    const [postLists, setPostList] = useState([]);
  const postsCollectionRef2 = collection(db, "Stories");
  

  // for stories
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef2);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
    <div className="rmPage">
        <Header/>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            Stories
          </h2>

          {postLists.map((post) => {
            return (
              <div style={containerStyle}>
                <div className="post">
                  <div className="postTextContainer">
                    
                    <h2>{post.title2}</h2>
                    <h3>{post.bodyText2}</h3>
                  </div>
                  <h5>
                  {post.name2}
                  {post.batch2}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default RmMemories
