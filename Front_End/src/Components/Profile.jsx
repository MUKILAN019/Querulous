import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const email = localStorage.getItem("email");

  useEffect(() => {
    LoadingFunc();
  }, []); 

  const LoadingFunc = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/user/profile", { email });
      setUserInfo(res);
      console.log(res)
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="p-16 bg-orange-300">
      <Link to="/home">
        <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100 flex" title="Go Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-orange-700">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
          </svg>
          <h2 className="text-xl mt-2 font-bold text-white mt-1">Go Back</h2>
        </button>
      </Link>
      {userInfo && (
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl"></p>
                <p className="text-gray-400">Friends</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl"></p>
                <p className="text-gray-400">Photos</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl"></p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-56 h-56 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img className="rounded-full h-56 w-56" src={userInfo.profileImageUrl} alt="Profile" />
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-orange-400 hover:bg-orange-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connection
              </button>
              <Link to="/edit">
                <button className="text-white py-4 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Edit profile
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{userInfo.name}, <span className="font-light text-gray-500">age {userInfo.age}</span></h1>
            <p className="font-light text-gray-600 mt-3">Location {userInfo.location}</p>
            <p className="mt-8 text-gray-500">You working as {userInfo.job}</p>
            <p className="mt-2 text-gray-500">You working at {userInfo.company}</p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">About {userInfo.name}</p>
            {/* <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Profile;