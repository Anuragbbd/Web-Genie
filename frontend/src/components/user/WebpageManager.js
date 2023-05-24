import React, { useState } from "react";
import app_config from "../../config";

const WebpageManager = () => {

  const [webpageList, setWebpageList] = useState([]);
  const { apiUrl } = app_config;

  const [currentuser, setCurrentuser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const showWebpage = () => {

  }

  const fetchWebpagesData = async () => {
    
  }

  return <div>
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Manage Your Website Pages</h3>
        </div>
        <div className="card-body">

        </div>
      </div>
    </div>
  </div>;
};

export default WebpageManager;
