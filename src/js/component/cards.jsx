import React from "react";

function Cards(props) {
  return (
    <div className="container justify-content-center align-items-center">
      <div className="card bg-black bg-gradient m-2 text-white py-5">
        <div className="card-body d-flex justify-content-center">
          <h1>{props.num}</h1>
        </div>
      </div>
    </div>
  );
}
export default Cards;
