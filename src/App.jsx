import { users } from "./data/user.js";
 const App=()=>{
return(<div>

{users.map((user)=>(<div className="border border-2 p-2 m-2">
<h3 className="">{user.name}</h3>
<p> {user.role}</p>
<p>Role : {user.online}</p>
</div>))}
</div>)
};
export default App;
