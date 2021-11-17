import styled from "styled-components";

/*
컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을때.
즉, styled-component가 적용되는 태그(div, span 등..)는 다른데 같은 스타일을 쓰고 싶을 때.
styled-component extension과는 다름. styled-component extension은 같은 태그의 스타일 내용을 확장시킬 때 사용.
우리가 하고자 하는 건 태그를 다른걸 쓸 때이니까 styled-component extension과는 다름.
*/

//1. as : styled-component가 사용할 태그의 이름을 바꾸고자 할 때
// App 컴포넌트에서 Father를 as를 사용해서 div태그가 아니라 header 태그를 사용하도록 바꿈.
const Father = styled.div`
  display: flex;
`;

// 2. attrs : styled-cmponents가 컴포넌트를 생성할 때 속성값을 설정할 수 있게 해주도록 함.
// 이 기능이 없으면 <input required/>를 여러개 작성해야함. required는 결국 같은데 불필요하게 반복적인 코드가 들어감.
// 태그명과 스타일내용 사이에 attrs({속성값 지정 내용})를 추가함.
// styled.태그명.attrs({속성값 지정 내용})`스타일 내용`
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
