import React, { useState, useEffect } from "react";
import Config from "../config/config";
import ListView from "./ListView";
import CardView from "./CardView";
import "./user-list";
import "./style.css";
import Loader from "../loader/Loader";

const Index = () => {
  const [char, setChat] = useState([]);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(false);
  const [loader, setLoader] = useState("is-active");
  const [charVal, setCharVal] = useState(0);

  const getUsers = async (value) => {
    setLoader("is-active"); // activate loader on every call

    const url = Config.API_URL + Config.GET_USERS;

    var raw = JSON.stringify({ word_no: value });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    };
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    if (data.status === 200 && data) {
      setUsers(data.users);
      setLoader();
    } else {
      setUsers([]);
    }
  };

  const toggleList = (e) => {
    setView(false);
  };
  const toggleCard = (e) => {
    setView(true);
  };

  const onAlphabetClick = (e) => {
    const value = e.target.value;
    setCharVal(value);
    getUsers(value);
  };

  const prepareAlphabets = () => {
    let result = [];
    for (let i = 97; i < 123; i++) {
      result.push({ value: String.fromCharCode(i), key: i });
    }
    setChat(result);
  };

  useEffect(() => {
    getUsers(charVal);
  }, []);

  useEffect(() => {
    prepareAlphabets();
  }, []);
  return (
    <>
      <div className="container">
        <ul className="filter-by-word" id="filter-by-word">
          <li
            value="0"
            key="0"
            onClick={onAlphabetClick}
            type="button"
            className="word-filter active"
          >
            ALL
          </li>
          {char.map((words) => {
            const { key, value } = words;
            return (
              <li
                type="button"
                key={key}
                onClick={onAlphabetClick}
                value={key}
                className="word-filter"
              >
                {value.toUpperCase()}
              </li>
            );
          })}
        </ul>
        <div className="row">
          <div className="col-md-3 col-lg-3"></div>
          <div className="col-md-6 col-lg-7"></div>
          <div className="col-md-3 col-lg-2 text-end change_view">
            <button
              className="btn btn-light mx-2 view active"
              title="List View"
              onClick={toggleList}
            >
              <i className="fa fa-list"></i>
            </button>
            <button
              className="btn btn-light view"
              title="Card View"
              onClick={toggleCard}
            >
              <i className="fa fa-th"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <Loader active={loader} />
            {view ? <CardView users={users} /> : <ListView users={users} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
