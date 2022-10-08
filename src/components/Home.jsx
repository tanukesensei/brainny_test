import React from "react";
import Navbar from "./Navbar";
import LogosLine from "./LogosLine";
import MiddleFront from "./MiddleFront";
import Plans from "./Plans";
import Footer from "./Footer";

const Home = () => {
  return (
    <div
      className="1 flex flex-col relative h-full"
      // style={{ paddingBottom: "100%" }}
    >
      <div className="2 h-full">
        <div className="bg-brainny-color"></div>
        <div className="bg-brainny h-full absolute inset-0"></div>
      </div>
      <div className="3 absolute inset-0 p-2 ">
        {/* <div className="container mx-auto"> */}
        <div className="landing-container">
          <Navbar />
          <MiddleFront />
          <LogosLine />
          <Plans />
        </div>
          <Footer />
      </div>
    </div>
  );
};

export default Home;
