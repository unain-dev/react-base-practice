import { useSelector, useDispatch } from "react-redux";
import Login from "./login-dialog";
import { setUserInfo } from "../../../common/store/modules/auth";

function LoginContainer() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  const onClickLogin = (id) => {
    console.log("in onLogin");
    // 이 부분은 비동기 통신의 success 부분(then)에서 처리해줘야함. 임시로 이렇게 처리.
    const token = {
      id: id,
    };
    sessionStorage.setItem("access-token", JSON.stringify(token));

    dispatch(setUserInfo(id));
    console.log("store에 있는 id : ", userInfo);
  };

  return (
    <>
      <Login onLogin={onClickLogin}></Login>
    </>
  );
}

export default LoginContainer;
