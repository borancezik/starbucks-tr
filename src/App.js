import React from "react";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import VideoContainer from "./containers/VideoContainer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <VideoContainer></VideoContainer>
        <PageContainer></PageContainer>
      </div>
    </div>
  );
}

export default App;
