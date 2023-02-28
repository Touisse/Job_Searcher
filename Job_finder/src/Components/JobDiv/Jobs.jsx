import React from "react";
import "./Jobs.css";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

const card = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Software Eng",
    time: "10hrs",
    location: "Germany",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Government Co.",
  },
  {
    id: 3,
    image: logo3,
    title: "UI Designer",
    time: "14hrs",
    location: "Manchester",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Liquid Assessments Co.",
  },
  {
    id: 4,
    image: logo4,
    title: "Product Designer",
    time: "Now",
    location: "Austria",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Newcastle Co.",
  },
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Software Eng",
    time: "10hrs",
    location: "Germany",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Government Co.",
  },
  {
    id: 3,
    image: logo3,
    title: "UI Designer",
    time: "14hrs",
    location: "Manchester",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Liquid Assessments Co.",
  },
  {
    id: 4,
    image: logo4,
    title: "Product Designer",
    time: "Now",
    location: "Austria",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Newcastle Co.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="job">
        {card.map(({ id, image, title, location, desc, company, time }) => {
          return (
            <div className="groupDiv" id="groupDiv" key={id}>
              <span className="groupSpan">
                <h1 className="textH1">{title}</h1>
                <span className="SpanDiv">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="textH6">{location}</h6>
              <hr className="line" />
              <p className="textP">{desc}</p>
              <div className="company">
                <img src={image} alt="" className="logo" />
                <span className="SpanDiv1">{company}</span>
              </div>
              <button className="btn1">Apply Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
