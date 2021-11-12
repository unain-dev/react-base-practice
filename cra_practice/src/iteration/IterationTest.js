import IterationSample from "./IterationSample";

const IterationComp = ({ msg }) => {
  return <div>{msg}</div>;
};

function IterationTest() {
  const objs = [
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ];

  const items = objs.map((obj) => <IterationComp msg={obj.text} />);

  return (
    <div className="App">
      <IterationSample />
      <IterationComp msg="hi" />
      <div>{items}</div>
    </div>
  );
}

export default IterationTest;
