import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./compose.css";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NoticeWrite from "./noticeWrite";

const Compose = () => {
  return (
    <div>
      <h1>Compose here</h1>
      <Link to ="/notice">
       <Button> Create Notice </Button>
      </Link>
      <Link to ="/jobnotification">
       <Button> Job Notification </Button>
      </Link>
      <Link to ="/writerm">
       <Button> WriteYourStory </Button>
      </Link>
      {/* <div className="bg-gray-100 h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Hello, Tailwind CSS!
        </h1>
      </div> */}
    </div>
  );
};

export default Compose;
