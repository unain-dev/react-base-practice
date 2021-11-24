import styled from "styled-components";

// 0. ts 프로젝트 생성 후,  npm i styled-components 그 후 npm i --save-dev @types/styled-components

// 2. interface : ts 컨셉. object shape(type)을 ts에게 설명해주는 ts의 개념.
//   -> 이 전에는 const x = (a : number, b:number) => a+b 이렇게 타입을 설명 했음.
//      즉 , interface는 object혹은 변수의 타입을 알려주는 것임.
//      이 예시에서는 prop의 타입을 ts에 알려주고 있음.
interface CircleProps {
  bgColor: string;
}

// 4. ts에게 bgColor를 styled-component에게도 보내고 싶다고 알림.
//    -> 원래에는 ContainerProps라는 인터페이스를 만들고 CircleProps처럼 만들어서, styled.div<ContainerProps>``로 넘겨줘도 됨.
//        그러나 CircleProps나 ContainerProps나 둘 다 같은 string의 bgColor 하나만을 object로 가지고 있음.
//        중복 코드를 제거하기 위해 CircleProps를 Container의 styled-component로 받는다.
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// 1. bgColor : Circle component의 prop. ts에서는 prop에 대한 타입을 정의해주지 않으면 오류가 난다. 그래서 prop을 ts로 보호해 줘야함.
// 3. CircleProps의 타입이 뭔지 컴포넌트에 알려줌.
//    -> 즉, bgColor는 CircleProps의 object이다. prop으로 받은 bgColor와 CircleProps interface 껍데기를 연결시킴.
//    -> 이제 ts는 CircleProps 안에 bgColor가 있는 것을 안다.
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

// 5. 하지만 지금은 Props가 required이기 때문에 App.tsx에서 prop을 안보내주면 오류가 난다!
//    -> 해결 방법 : 다음 2.3 Optional Props 챕터에서 나올 예정.

export default Circle;
