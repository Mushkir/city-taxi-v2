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
};

export default apiEndPoint;
