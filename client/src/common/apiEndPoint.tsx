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
  getAllDrivers: {
    url: `${API_URI}/api/driver/show-all-drivers`,
    method: "GET",
  },
  getSelectedDriverDetail: {
    url: `${API_URI}/api/driver/get-selected-driver-detail`,
    method: "POST",
  },
  reserveTaxi: {
    url: `${API_URI}/api/reservation/reserve-taxi`,
    method: "POST",
  },
};

export default apiEndPoint;
