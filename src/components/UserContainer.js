import React from "react";
import { Link } from "react-router-dom";

const UserContainer = ({ users }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center py-4">
      {users &&
        users.map(
          (user, ind) =>
            user?.login && (
              <div
                key={ind}
                className="flex w-[200px] border border-gray-400 bg-gray-800 p-3 flex-col items-center"
              >
                <img
                  src={user?.avatar_url}
                  alt="user img"
                  className="w-24 mb-4 border-4 border-teal-200  rounded-full"
                />
                <h1 className="text-xl">{user?.login}</h1>
                <h1 className="text-xs text-teal-300">{user?.name}</h1>
                <Link to={`/${user?.login}`}>
                  <span className="text-gray-200 bg-teal-500 my-3 font-semibold block py-1 px-4 tracking-wide rounded">
                    View
                  </span>
                </Link>
              </div>
            )
        )}
    </div>
  );
};

export default UserContainer;
