import { useState, useEffect } from "react";
import Config from "../config/config";
import Default from "../../assets/images/Default.jpg";
import "./style.css";

const Index = () => {
  const intitalValue = 0;
  const [char, setChat] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = async (value) => {
    const url = Config.API_URL + Config.GET_USERS;

    var raw = JSON.stringify({ name: value });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    };
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    if (data.status === 200 && data) {
      setUsers(data.users);
    } else {
      setUsers([]);
    }
  };

  const onAlphabetClick = (e) => {
    const value = e.target.value;
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
    getUsers(intitalValue);
  }, []);

  useEffect(() => {
    prepareAlphabets();
  }, []);
  // console.log(users);
  return (
    <>
      <div className="container">
        <ul className="filter-by-word" id="filter-by-word">
          <li value="0" key="0" onClick={onAlphabetClick} type="button">
            ALL
          </li>
          {char.map((words) => {
            const { key, value } = words;
            return (
              <li type="button" key={key} onClick={onAlphabetClick} value={key}>
                {value.toUpperCase()}
              </li>
            );
          })}
        </ul>
        {users.length > 0 ? (
          users.map((user) => {
            const {
              _id,
              name,
              email,
              contact_no,
              status,
              username,
              user_image,
            } = user;
            const profileImg = user_image ? user_image : Default;
            return (
              <>
                <div className="card mb-2" key={_id.toString()}>
                  <div className="row g-0">
                    <div className="col-2 user-img">
                      <img
                        src={profileImg}
                        className="img-fluid rounded-start profile-img"
                        alt={profileImg}
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <div className="card-title">
                          <h5 className="card-title">{name}</h5>
                          <small className="text-muted">
                            Last Active 3 mins ago
                          </small>
                        </div>
                        <div className="card-text">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div className="card">
              <div className="row g-0">
                <div className="col-10">
                  <div className="card-body">
                    <div className="card-text">User Not Found !!!</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
