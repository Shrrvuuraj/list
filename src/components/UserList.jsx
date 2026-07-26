import { users } from "../data/user.js";
import  UserCArd  from "./UserCArd.jsx";
const UserList = () => {
  return (
    <>
      {users.map((user) => (
        <UserCArd key={user.id} user={user} />
      ))}
    </>
  );
};

export default UserList;