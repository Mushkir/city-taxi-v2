const API_URI = "http://localhost:3000";

const apiEndPoint = {
  driverSignUp: {
    url: `${API_URI}/api/driver/register`,
    method: "POST",
  },
  passengerSignUp: {
    url: `${API_URI}/api/passenger/register`,
    method: "POST",
  },
  login: {
    url: `${API_URI}/api/user/login`,
    method: "POST",
  },
  logout: {
    url: `${API_URI}/api/user/logout`,
    method: "GET",
  },
};

export default apiEndPoint;
