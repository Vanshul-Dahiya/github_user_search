import React, { useEffect, useRef, useState } from "react";
import UserContainer from "../components/UserContainer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const BaseUrl = "https://api.github.com/users";
  const user = useRef("");

  async function AllUsers() {
    const res = await fetch(BaseUrl);
    const data = await res.json();
    setUsers(data);
  }

  async function FindUser() {
    console.log(user.current.value);
  }
  useEffect(() => {
    AllUsers();
  }, [setUsers]);
  return (
    <div>
      <div className="flex justify-center items-center h-11 my-5 ">
        <input
          type="text"
          placeholder="Search github username ..."
          className="h-full md:w-1/3 w-2/3 text-gray-800 px-2 font-semibold outline-none"
          ref={user}
        />
        <button
          onClick={FindUser}
          className="bg-teal-400 font-semibold px-4 h-full"
        >
          Search
        </button>
      </div>
      <UserContainer users={users} />
    </div>
  );
};

export default Users;
