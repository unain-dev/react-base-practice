import "./modal.css";

// 모달창 만들기 : https://phrygia.github.io/react/2021-09-21-react-modal/
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            {/* <Link to="/"> */}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
            {/* </Link> */}
          </header>
          <main>{props.children}</main>
          <footer>
            {/* <Link to="/"> */}
            <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button>
            {/* </Link> */}
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
