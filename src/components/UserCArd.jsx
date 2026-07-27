import { useState } from "react";

const UserCArd = ({ user }) => {
  const [status, setStatus] = useState(user.online);

  const statusChange = () => {
    setStatus(prev=>!prev)
    // console.log(status)
  };

  return (
    <div className=" border-2 m-2  p-2">
      <h3>Name : {user.name}</h3>
      <p>Job : {user.role}</p>
      <p>status : {status ? "🟢 online" : " 🔴 offline"}</p>
      <button
      className="border-2 p-2 bg-gray-800 text-amber-50" 
        onClick={statusChange}
      >
        status
      </button>
    </div>
  );
};

export default UserCArd;
