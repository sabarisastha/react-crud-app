import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../apiCall";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [regNo, setReg] = useState("");
  const [dept, setDept] = useState("");

  const navigate = useNavigate(); 

  const postData = async () => {
    try {
      await axios.post(API_KEY, {
        name,
        regNo,
        dept,
      });

      navigate("/read"); 
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="create">
      <h1>Create Your Identity</h1>

      <div className="formdiv">
        <form className="form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>RegisterNO </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter RegisterNo"
              value={regNo}
              onChange={(e) => setReg(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>

          <div>
            <button
              className="btn btn-primary sm"
              onClick={(e) => {
                e.preventDefault(); 
                if (name.trim()) {
                  postData();
                } else {
                  alert("Name is required");
                }
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
