import styled, { keyframes } from "styled-components";

// 1. pseudo selector1 styled-component 내부 태그 선택
const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

// 1-2. span { ... }으로 <Box> styled-component 내의 <span> 태그를 선택.
// 1-3. & : this를 뜻함. 아래 <Box> styled-component 예시에서는 span을 가리킴.
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

// =====================================================================================

// 2. styled-component 내부 태그 선택하는 또 다른 방법.
// 1번 예제는 span 태그에만 의존하고 있기 때문에 <Box> styled-component 내부에 span이 아닌 다른 태그가 오면 선택하지 못함. = 태그 이름에 의존적이다.
// 이를 보완하기 위해 2번 예제에서는 나만의 태그를 만든다.
const Wrapper2 = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

// 2-1. 나만의 태그 선언 2번처럼 Box에 inner로 지정하지 않고 이렇게 따로 빼면 as로 다른 태그로 바꿀 수 있다.
const Emoji2 = styled.span`
  font-size: 36px;
`;

// 2-2. 나만의 태그를 <Box> styled-component에서 호출?사용?
const Box2 = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji2}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <div>
      {/* 1번 예제 */}
      <Wrapper>
        <Box>
          {/* 1-1. span 태그는 styled-components Box 안에 속하지 않음. */}
          <span>🤩</span>
        </Box>
      </Wrapper>

      {/* ================================================================================ */}

      {/* 2번 예제 */}
      <Wrapper2>
        <Box2>
          <Emoji2>🤩</Emoji2>
        </Box2>

        {/* 2-1. as로 Emoji2의 원래 태그인 span을 div로 바꿈. */}
        <Box2>
          <Emoji2 as="div">🤩</Emoji2>
        </Box2>

        {/* Box3 내부에 없어서 styled-component로 핸들링이 불가. */}
        <Emoji2>🔥</Emoji2>
      </Wrapper2>
    </div>
  );
}

export default App;
