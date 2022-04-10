import React, { createContext, useState } from "react";
import { UPDATE_PROFILE } from "../../services/constants";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

export const CommonContext = createContext();

export default function Home() {
  const [screen, setScreen] = useState(UPDATE_PROFILE);
  const [user, setUser] = useState("Suraj Shinde");

  const [isLoading, setIsLoading] = useState(false);

  let common = {
    isLoading,
    setIsLoading,
  };

  return (
    <CommonContext.Provider value={{ ...common }}>
      {isLoading && <Loading />}
      <Header
        isLogin={true}
        user={user}
        onSetScreen={(value) => setScreen(value)}
      />
      <Sidebar onSetScreen={(value) => setScreen(value)} />
      <Main screen={screen} />
    </CommonContext.Provider>
  );
}
