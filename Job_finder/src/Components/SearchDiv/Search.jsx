import React from "react";
import "./Search.css";
import { AiOutlineSearch , AiOutlineCloseCircle} from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="search">
      <form action="">
        <div className="firstDiv">
          <div className="icons">
            <AiOutlineSearch className="icon"  />
            <input type='text' className="search-input" placeholder="Search Job here ..."/>
            <AiOutlineCloseCircle className="icon1"  />
          </div>
          <div className="icons">
            <BsHouseDoor className="icon"  />
            <input type='text' className="search-input" placeholder="Search Job by Company ..."/>
            <AiOutlineCloseCircle className="icon1"  />
          </div>
          <div className="icons">
            <CiLocationOn className="icon"  />
            <input type='text' className="search-input" placeholder="Search Job by Location ..."/>
            <AiOutlineCloseCircle className="icon1"  />
          </div>
          <button className='btn'>Search</button>
        </div>
      </form>

      <div className="search2">
        <div className='singleSearch'>
          <label htmlFor='relevance' className='sort-label' >Sort by :</label>
          <select name='' id='relevance' className='sort-select'>
            <option value=''>Relevance</option>
            <option value=''>Inclusive</option>
            <option value=''>Start With</option>
            <option value=''>Contains</option>
          </select>
        </div>
        <div className='singleSearch'>
          <label htmlFor='level' className='sort-label' >Level :</label>
          <select name='' id='relevance' className='sort-select'>
            <option value=''>Senior</option>
            <option value=''>Beginner</option>
            <option value=''>Intermediate</option>
            <option value=''>Advocate</option>
          </select>
        </div>
        <div className='singleSearch'>
          <label htmlFor='type' className='sort-label' >Type :</label>
          <select name='' id='relevance' className='sort-select'>
            <option value=''>Full-Time</option>
            <option value=''>Remote</option>
            <option value=''>Contract</option>
            <option value=''>Part-Time</option>
          </select>
        </div>
        <span>Clear All</span>
      </div>
    </div>
  );
};

export default Search;
