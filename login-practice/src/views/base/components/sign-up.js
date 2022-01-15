import { useState } from "react";
import Modal from "../modals/Modal";

function SignUp() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* <button onClick={openModal}>Login</button> */}
      {/* //header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="회원가입">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 */}
        <form>
          <div>
            <input placeholder="ID"></input>
          </div>
          <div>
            <input placeholder="PW"></input>
          </div>
          <input type="submit"></input>
        </form>
      </Modal>
    </>
  );
}

export default SignUp;
