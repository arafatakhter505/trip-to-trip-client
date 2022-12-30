import React from "react";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <div className="container mx-auto h-[500px] my-6 px-2 md:px-0">
      <div
        className="hero h-full rounded-lg"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/VDPp6VUWdRyP3NjQjIcKUJc8M58XLQBRqNcxAJ8ID0KRRCprBl4G-a1VLg6kdHKDJncxmxPnxZo9QGPuHUvCMBAni2VxQ0EjfSvlvQHE=w1000?s=300")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70 w-full h-full rounded-lg">
          <div className="text-white h-full flex items-center md:p-12 p-6">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold leading-tight">
                Travel Discover With Trip To Trip
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button title={"Explore Places"} />
            </div>
          </div>
        </div>
        {/* <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Travel Discover</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button title={"Explore Places"} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
