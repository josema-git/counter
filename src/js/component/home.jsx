import React from "react";
import Cards from "./cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  return (
    <>
      <div className="m-2 d-flex justify-content-center bg-black p-2">
        <Cards num={<FontAwesomeIcon icon={faClock} />} />
        <Cards num={Math.floor((props.seconds % 1000000) / 100000)} />
        <Cards num={Math.floor((props.seconds % 100000) / 10000)} />
        <Cards num={Math.floor((props.seconds % 10000) / 1000)} />
        <Cards num={Math.floor((props.seconds % 1000) / 100)} />
        <Cards num={Math.floor((props.seconds % 100) / 10)} />
        <Cards num={props.seconds % 10} />
      </div>
    </>
  );
};

export default Home;
