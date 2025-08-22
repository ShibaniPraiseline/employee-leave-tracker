import React, { useState } from "react";
import "./App.css";

function App() {
  const [leaves, setLeaves] = useState([]);
  const [employee, setEmployee] = useState("");
  const [days, setDays] = useState("");
  const [reason, setReason] = useState("");

  const handleAddLeave = () => {
    if (employee && days && reason) {
      const newLeave = {
        id: leaves.length + 1,
        employee,
        days,
        reason,
        status: "Pending"
      };
      setLeaves([...leaves, newLeave]);
      setEmployee("");
      setDays("");
      setReason("");
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleApprove = (id) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved" } : leave
      )
    );
  };

  const handleReject = (id) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Rejected" } : leave
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Employee Leave Tracker</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
        <input
          type="number"
          placeholder="No. of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button onClick={handleAddLeave}>Apply Leave</button>
      </div>

      <h2>Leave Applications</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Days</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.employee}</td>
              <td>{leave.days}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
              <td>
                {leave.status === "Pending" && (
                  <>
                    <button
                      className="approve"
                      onClick={() => handleApprove(leave.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="reject"
                      onClick={() => handleReject(leave.id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

