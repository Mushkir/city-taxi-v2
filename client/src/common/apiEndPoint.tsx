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
  countReservations: {
    url: `${API_URI}/api/reservation/count-reservations`,
    method: "GET",
  },
  showReservationHistory: {
    url: `${API_URI}/api/reservation/show-reservation-details`,
    method: "GET",
  },
  deleteReservation: {
    url: `${API_URI}/api/reservation/delete-reservation`,
    method: "DELETE",
  },
  countDriverNewReservationRequest: {
    url: `${API_URI}/api/driver/count-driver-new-request`,
    method: "GET",
  },
  getNewRequestsDetail: {
    url: `${API_URI}/api/driver/get-new-reservation-request-details`,
    method: "GET",
  },
};

export default apiEndPoint;
