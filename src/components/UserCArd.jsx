import React, { useState } from "react";

const UserCArd = ({ user }) => {
  const [status, setStatus] = useState(user.online);

  const statusChange = () => {
    setStatus(!status)
  };

  return (
    <div className="border border-2 m-2  p-2">
      <h3>Name : {user.name}</h3>
      <p>Job : {user.role}</p>
      <p>status : {status ? "🟢 online" : " 🔴 offline"}</p>
      <button
        onClick={() => {
          statusChange;
        }}
      >
        status
      </button>
    </div>
  );
};

export default UserCArd;
