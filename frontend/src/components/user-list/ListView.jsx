import React from "react";
import Default from "../../assets/images/Default.png";

const View = (props) => {
  const users = props.users;
  const usersAscending = [...users].sort((a, b) =>
    a.fullname > b.fullname ? 1 : -1
  );

  return (
    <div>
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
            <div key={_id}>
              <div className="card mb-2">
                <div className="row g-0">
                  <div className="col-md-3 user-img">
                    <img
                      src={profileImg}
                      className="img-fluid rounded-start profile-img"
                      alt={profileImg}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="card-title">
                        <h5 className="card-title">{fullname}</h5>
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
            </div>
          );
        })
      ) : (
        <div className="card">
          <div className="row g-0">
            <div className="col-10">
              <div className="card-body">
                <div className="card-text">User Not Found !!!</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default View;
