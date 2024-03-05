import React from "react";
import Slider from "../Carousel/Slider";
import Gallary from "../Gallary/Gallary";
import Services from "../Services/Services";
import Facilities from "../Facilities/Facilities";

const Home = () => {
  return (
    <div>
      <Slider />
      <Gallary />
      <Services />
      <Facilities />
    </div>
  );
};

export default Home;
