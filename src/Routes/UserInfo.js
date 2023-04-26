import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const BaseUrl = "https://api.github.com/users";

  async function GetUserInfo() {
    const res = await fetch(BaseUrl + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }
  useEffect(() => {
    GetUserInfo();
  }, [pathname]);
  return (
    <div className="py-5 ">
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200"
      >
        Back
      </button>
      {user &&
        user?.map((uInfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10 "
          >
            <img
              src={uInfo.avatar_url}
              alt=""
              className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
            />
            <div className="text-lg px-3 leading-9 ">
              <h1 className="text-3xl pb-4">{uInfo?.name}</h1>
              <h1>
                <span className="text-teal-400">Login_name</span> :{" "}
                {uInfo?.login}
              </h1>
              <h1>
                <span className="text-teal-400">Followers</span> :{" "}
                {uInfo?.followers}
              </h1>
              <h1>
                <span className="text-teal-400">Following</span> :{" "}
                {uInfo?.following}
              </h1>
              <h1>
                <span className="text-teal-400">Public_Repositories</span> :{" "}
                {uInfo?.public_repos}
              </h1>
              <h1>
                <span className="text-teal-400">Join</span> :{" "}
                {new Date(uInfo?.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uInfo?.html_url}
                target="_blank "
                className="text-gray-200 font-semibold rounded cursor-pointer px-4 py-1 bg-teal-500 my-5 tracking-wide"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      <div className="flex border-b pb-4 gap-6 mb-6 mt-[10%]">
        <button>Repositories</button>
        <button>Activity</button>
        <button>Followers</button>
      </div>
    </div>
  );
};

export default UserInfo;
