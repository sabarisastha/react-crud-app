import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../apiCall"; 
import { useNavigate } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [regNo, setReg] = useState("");
  const [dept, setDept] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("id") || "";
    const storedName = localStorage.getItem("name") || "";
    const storedReg = localStorage.getItem("regNO") || "";
    const storedDept = localStorage.getItem("dept") || "";

    setId(storedId);
    setName(storedName);
    setReg(storedReg);
    setDept(storedDept);
  }, []);

  const updateData = async () => {
    if (!id) {
      alert("ID is missing. Cannot update.");
      return;
    }

    try {
      await axios.put(`${API_KEY}${id}`, {
        name,
        regNo,
        dept,
      });

      alert("Updated successfully!");
      navigate("/read");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update. See console for details.");
    }
  };

  return (
    <div className="create">
      <h1>Update Your Info</h1>

      <div className="formdiv">
        <form className="form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Register No</label>
            <input
              type="number"
              className="form-control"
              value={regNo}
              onChange={(e) => setReg(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              if (name && regNo && dept) {
                updateData();
              } else {
                alert("Please fill all fields before updating.");
              }
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
