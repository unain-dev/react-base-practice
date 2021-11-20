import styled from "styled-components";

// * Thema : 모든 색깔을 가지고 있는 오브젝트. 색상 모드 변경하는 데에 사용.
// 1. index.js에 세팅
// 1-1. import { ThemeProvider } from "styled-components";
// 1-2. index.js에 App 컴포넌트를 <ThemeProvider>태그 내부로 오도록 감싼다.
// 1-3. <ThemeProvider>태그에 theme를 prop로 전달할 스타일 속성들을 object로 변수에 할당한다.
// 1-4. 3번에서 선언한 변수를 <ThemeProvider>태그에 theme=""로 prop로 전달한다.(어떤 색을 사용할 것인지 결정.)
// 2. <ThemaProvider>로 감싼 App 컴포넌트에서 props로 받은 theme에 접근해서 스타일을 설정.
// 2-1. props로 전달된 theme를 화살표 함수로 받아서 스타일 설정.

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
