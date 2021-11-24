import Circle from "./Circle";

function App() {
  return (
    <div>
       {/* 1. 첫번째 Circle에만 border를 주고 두번째 Circle에는 border를 안주고 text를 줌. */}
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default App;