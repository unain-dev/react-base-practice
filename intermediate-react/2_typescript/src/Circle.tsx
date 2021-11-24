import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  // 1. useState 선언 : ts에서는 useState(초기값);에서 초기값으로 넣어준 데이터의 자료형으로 계속해서 state 값을 가질 것이라고 예상.
  // -> 이미 ts가 자동으로 이렇게 초기값 타입으로 쭉 갈거라고 예상하지만, 명시적으로 선언해 줄 수도 있다.
  // -> 명시적 선언 : useState<자료형>(초기값);으로 선언한다.
  const [value, setValue] = useState<string>("");
  
  //const [value, setValue] = useState(""); -> 오류 안남. 초기 값이 string이라 ts는 이 state의 자료형을 string으로 계속 인식한다.
  
  //setValue(1) -> 에러 발생
  //setValue("hi") -> 정상작동
  //setValue(true) -> 에러 발생
  
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;