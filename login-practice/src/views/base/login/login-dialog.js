import Modal from "../modals/Modal";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import store from "../../../common/store/modules/auth";

// 모달창 만들기 : https://phrygia.github.io/react/2021-09-21-react-modal/
// history 사용해 이 전 페이지로 이동 :https://velog.io/@leemember/React-Router-dom%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B4%EC%A0%84-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0
const Login = ({ onLogin }) => {
  // const { onLogin } = props;

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    sessionStorage.removeItem("access-token");
    goBack();
  };

  // react hook에서 state 사용
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // handler 함수들
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPwHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(id);
    onLogin(id); // store에 userInfo 저장.
  };

  return (
    <>
      {/* //header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="Login">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 */}
        <form>
          <div>
            <input placeholder="ID" value={id} onChange={onIdHandler}></input>
          </div>
          <div>
            <input placeholder="PW" value={pw} onChange={onPwHandler}></input>
          </div>
          <button type="button" onClick={onSubmit}>
            로그인
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Login;
