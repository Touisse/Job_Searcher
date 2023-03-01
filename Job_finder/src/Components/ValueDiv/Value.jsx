import React from "react";
import simple from "../../assets/card1.jpeg";
import simple2 from "../../assets/card2.png";
import simple3 from "../../assets/card3.png";
import "./Value.css";

const Value = () => {
  return (
    <div className="value">
      <h1 className="h1text">The value that holds us true and to account</h1>
      <div className="card-div">
        <div className="card-element1">
          <div className="card-element2">
            <div className="img-div">
              <img src={simple} alt="" />
            </div>
            <span className="span-div">Simplicity</span>
          </div>
          <p className="desc">
            Things being made beautiful simple are at the heart of everything we
            do .
          </p>
        </div>
        <div className="card-element1">
          <div className="card-element2">
            <div className="img-div">
              <img src={simple3} alt="" />
            </div>
            <span className="span-div">Simplicity</span>
          </div>
          <p className="desc">
            we believe in making things better for everyone , eben if just by
            little bit !.
          </p>
        </div>
        <div className="card-element1">
          <div className="card-element2">
            <div className="img-div">
              <img src={simple2} alt="" />
            </div>
            <span className="span-div">Simplicity</span>
          </div>
          <p className="desc">
            we work on the basic of creating trust which can be nurtured through
            authenticity and transparency .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
