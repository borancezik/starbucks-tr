import React from "react";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import VideoContainer from "./containers/VideoContainer";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-row justify-end mt-20">
        <VideoContainer></VideoContainer>
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PageContainer>
      </div>
    </div>
  );
}

export default App;
