import React, { useEffect, useState } from "react";
import app_config from "../../config";

const WebpageManager = () => {
  const [webpageList, setWebpageList] = useState([]);
  const { apiUrl } = app_config;

  const [currentuser, setCurrentuser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const editWebpage = (id) => {
    console.log(id);
  };

  const deleteWebpage = (id) => {
    console.log(id);
  };

  const showWebpage = () => {
    return webpageList.map((webpage) => {
      return (
        <tr key={webpage._id}>
          <td>{webpage.webpageName}</td>
          <td>{webpage.webpageUrl}</td>
          <td>{webpage.webpageDescription}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                editWebpage(webpage._id);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteWebpage(webpage._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const fetchWebpagesData = async () => {
    const res = await fetch(`${apiUrl}/webpage/getbyuser/${currentuser._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setWebpageList(data.result);
    } else {
      console.error("Error retrieving user data");
    }
  };

  useEffect(() => {
    fetchWebpagesData();
  }, []);

  return (
    <div>
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Manage Your Website Pages</h3>
          </div>
          <div className="card-body">
            <button
              type="button"
              className="btn btn-primary float-end my-4"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"
            >
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Launch demo
              modal
            </button>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Webpage Name</th>
                  <th>Webpage URL</th>
                  <th>Webpage Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{showWebpage()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebpageManager;
