import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  function handleChange(event) {
    props.onSearchText(event.target.value)
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get </span>
          <input id="search-box" type="search" onChange={handleChange} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
