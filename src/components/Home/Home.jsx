import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { UPDATE_PROFILE } from "../../services/constants";
import { getSubjects } from "../../services/studentService";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

export const CommonContext = createContext();

export default function Home() {
  let user = localStorage.getItem("edacuser");
  if (!user) window.location.href = "/login";
  user = JSON.parse(user);
  const userName = user.firstName + " " + user.lastName;
  const [screen, setScreen] = useState(UPDATE_PROFILE);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let common = {
    user,
    isLoading,
    setIsLoading,
  };

  useEffect(() => {
    getSubjects()
      .then(({ data }) => {
        setSubjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, []);

  return (
    <CommonContext.Provider value={{ ...common }}>
      {isLoading && <Loading />}
      <Header
        isLogin={true}
        user={userName}
        onSetScreen={(value) => setScreen(value)}
      />
      <Sidebar onSetScreen={(value) => setScreen(value)} />
      <Main screen={screen} />
    </CommonContext.Provider>
  );
}
