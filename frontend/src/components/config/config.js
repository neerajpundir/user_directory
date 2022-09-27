const Config = {
  API_URL: "http://localhost:5050",
  GET_USERS: "/api/user/get_users", // send character in the body by (name), For example: { name : "97" }
  ADD_USER: "/api/user/register",
  UPDATE_USER: "/api/user/edit-user/", // send id with the url, For Example: http://localhost:5050/api/user/edit-user/2;
};

export default Config;
