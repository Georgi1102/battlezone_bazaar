import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../style.css";
import pfp from "../images/pfp.jpg";

export default function Forum() {
  const [discussions, setDiscussions] = useState([]);
  const navigate = useNavigate();

  const fetchDiscussions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/discussions/get-all"
      );
      return response.data;
    } catch (err) {}
  };

  useEffect(() => {
    fetchDiscussions().then((data) => {
      setDiscussions(data);
    });
  }, []);

  return (
    <div className="flex bg-forum-img flex-col w-full min-h-screen">
      <NavigationBar></NavigationBar>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-16 text-justify w-3/4">
        <div>
          <h1 className="font-gfsNeohellenicBold text-white text-4xl mt-6 ml-6">
            Discussions
          </h1>
        </div>
        <div className="lg:justify-self-end md:justify-self-end sm:justify-self-start sm:ml-6">
          <button className="mt-7 w-70 rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-2 px-4 flex justify-center">
            + Start new discussion
          </button>
        </div>
      </div>
      <div className="grid grid-col gap-7 mb-10 ml-6 mt-5 w-3/4">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="bg-dark-gray p-5 rounded-md text-white"
          >

            {/* removed because there is no user to discussion relation */}
            
            {/* <div className="flex flex-cols-2 columns-2xs gap-5">
              <img src={pfp} alt="" className="w-10 rounded-full" />
              <span className="font-gfsNeohellenicRegular text-base text-gray">
                Posted by {discussion.username}
              </span>
            </div> */}
            <h2 className="font-gfsNeohellenicBold text-3xl mt-5 mb-2">
              {discussion.title}
            </h2>
            <p>{discussion.description}</p>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
