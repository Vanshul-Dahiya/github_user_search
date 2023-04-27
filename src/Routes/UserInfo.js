import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../components/Tab";
import Repo from "../components/Repo";
import Events from "../components/Events";
import UserContainer from "../components/UserContainer";
import Loading from "../components/Loading";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const BaseUrl = "https://api.github.com/users";

  async function GetUserInfo() {
    setLoading(true);
    const res = await fetch(BaseUrl + pathname);
    const data = await res.json();
    setUser(() => [data]);
    setLoading(null);
  }
  async function GetUrls() {
    setUser([]);
    setLoading(true);
    const res = await fetch(BaseUrl + pathname + `/${type}`);
    const data = await res.json();
    setInfo(data);
    setLoading(null);
  }
  useEffect(() => {
    GetUserInfo();
    GetUrls();
  }, [pathname, type]);
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
      <div className="flex border-b pb-4 gap-6 mb-6 mt-[10%] justify-center md:text-xl">
        <Tabs type={type} setType={setType} />
      </div>
      {loading && <Loading />}
      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {info && <Repo repos={info} />}
        </div>
      )}
      {type === "received_events" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {info && <Events events={info} />}
        </div>
      )}
      {type === "followers" && (
        <div>
          <UserContainer users={info} />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
