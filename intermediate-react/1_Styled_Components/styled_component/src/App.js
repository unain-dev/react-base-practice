import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// props로 background-color를 받아와서 할당
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 기존 Box styled-component의 모든 속성(특성)을 가져와 새로운 것을 더함.
// 상속 개념이랑 비슷...? 중복 코드를 줄여줌.
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
