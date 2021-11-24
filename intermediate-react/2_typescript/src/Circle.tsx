import styled from "styled-components";

// 1. optiona props
// 2. default props

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// 1-2. 이 styled-components는 ContainerProps 를 사용하고 있으므로 무조건 bgcolor, borderColor 둘 다 사용해야함.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// 1-1. optional props로 만드려면 interface의 key에 ?를 끝에 붙여주면 됨.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// 2-1. default props : props를 받아올 때 =로 default 값을 할당시킴. 이건 ts는 아니고 es6 문법.
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    // 1-3. borderColor가 있으면 인가시켜주고, 없으면 bgColor로 보내주도록 삼항연산자 수행. (부모 컴포넌트의 borderColor는 optional이라서 인가 가 안될 수도 있음.)
    // 만약, 이 삼항연산자가 없이 bordercolor를 없애면 ContainerProps에서는 borderColor가 필수이기 때문에 오류 발생.
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;