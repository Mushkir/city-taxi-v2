// import { useNavigate } from "react-router";
import { userLogout } from "../redux/user/userSlice";
// import { useDispatch } from "react-redux";
import apiEndPoint from "../common/apiEndPoint";

const handleLogout = async (dispatch: Function, navigate: Function) => {
  try {
    const response = await fetch(apiEndPoint.logout.url, {
      credentials: "include",
      method: apiEndPoint.logout.method,
    });
    const respData = await response.json();
    if (respData?.status === 200) {
      dispatch(userLogout());
      navigate("/");
    }
    console.log(respData?.status);
  } catch (error) {
    console.error(error);
  }
};

export default handleLogout;
