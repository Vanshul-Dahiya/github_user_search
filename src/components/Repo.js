import React from "react";

const Repo = ({ repos }) => {
  return (
    <div>
      {repos.map((repo, ind) => (
        <div key={ind} className="bg-gray-800 p-3 leading-8">
          <a
            href={repo.html_url}
            className="text-teal-500 break-words font-semibold hover:underline "
            target="_blank"
          >
            {repo.full_name}
          </a>
          <div className="flex gap-x-5">
            <h1 className="text-sm font-semibold">{"🟢" + repo.language}</h1>
            <h1 className="text-sm font-semibold">forks : {repo.forks} </h1>
            <h1 className="text-sm font-semibold">
              stars : {repo.stargazers_count}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repo;
