import React from "react";
import Default from "../../assets/images/Default.png";

const CardView = (props) => {
  const users = props.users;
  const usersAscending = [...users].sort((a, b) =>
    a.fullname > b.fullname ? 1 : -1
  );
  return (
    <div className="row">
      {usersAscending.length > 0 ? (
        usersAscending.map((user) => {
          const {
            _id,
            fullname,
            email,
            contact_no,
            status,
            username,
            user_image,
          } = user;
          const profileImg = user_image ? user_image : Default;

          return (
            <div className="col-12 col-sm-6 col-md-3 mb-3" key={_id}>
              <div className="card">
                <div className="">
                  <img src={profileImg} className="img-fluid rounded-start card-view-image" />
                </div>
                <div className="card-body card-view-body">
                  <div className="card-title">
                    <h6 className="card-title card-view-title">{fullname}</h6>
                    <small className="text-muted"></small>
                  </div>
                  <div className="card-text"></div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container">
          <div className="card">
            <div className="row g-0">
              <div className="col-10">
                <div className="card-body">
                  <div className="card-text">User Not Found !!!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardView;
