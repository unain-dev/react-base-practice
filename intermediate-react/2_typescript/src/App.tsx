import Circle from "./Circle";

function App() {
  return (
    <div>
       {/* 1. bgColor : Circle component의 prop. ts로 보호해 줘야함. */}
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;