import React from "react"
import {useState} from "react";
import './Search.scss';
import SearchIcon from '../../images/searchBlack.svg';
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue ] = useState('');
  const navigate = useNavigate();
  

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/`+ searchValue )
    setSearchValue('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="search">
        <div className="search-input">
          <input 
            type="text"
            placeholder="Search here"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            required
          />
        </div>

        <div onClick={submitHandler} className="search-icon">
          <img src={SearchIcon} alt="" />
        </div>
      </div>
    </form>
  )
}

export default Search