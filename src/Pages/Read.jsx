import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../apiCall";
import { useNavigate } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const deleteData = async (id) => {
    await axios.delete(API_KEY + id);
    getData();
  };

  const updateData = ({ name, regNo, dept, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("regNo", regNo);
    localStorage.setItem("dept", dept);
    navigate("/update");
  };
  const getData = async () => {
    const res = await axios.get(API_KEY);
    setApiData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="read col-5">
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <button className="btn btn-success " onClick={() => navigate("/")}>
            + Create
          </button>
        </div>
        <div className="col text-center">
          <h1 className="m-0">STUDENT INFO</h1>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>RegisterNO</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {apiData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.regNo}</td>
              <td>{data.dept}</td>
              <td className="action-btn">
                <button
                  className="btn btn-info "
                  onClick={() => {
                    updateData(data);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    deleteData(data.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
