import React, { useState } from "react";

// 1. input의 value를 state와 연결
// 2. ts에서 form의 submit

function App() {

  const [value, setValue] = useState("");

  // 1-2. input의 change event listener로 useState 업데이트
  //      -> 그런데 이 때, event는 아무 타입이나 될 수 있으므로 any type이 됨. 우리는 any type을 최대한 막아야함.
  // 1-3. event들에 타입을 추가.
  //      -> event: React.FormEvent
  //      -> 이런 곳에 어떤 타입을 써야할 지 타입을 찾을 때에는 document를 읽거나 구글링해서 찾아라.
  // 1-4. 어떤 종류의 element가 이 이벤트를 발생시킬지 특정함.
  //      -> event: React.FormEvent<HTMLInputElement>
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // target = currentTarget
    console.log(event.currentTarget.value);
    
    // 1-5. event를 열어서 event 안에 있는 currentTarget을 value 변수에 할당해줌.
    const {
      currentTarget: { value }, 
    } = event;

    // 1-6. useState를 set함.
    setValue(value);
  };

  // 2-2. 1-3처럼 event에 타입 지정. 여기에서는 HTMLFormElement.
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      {/* 2-1. submit 이벤트 연결 */}
      <form onSubmit={onSubmit}>

        {/* 1-1. input의 value를 state와 연결 */}
        {/* 1-2. input의 change event listener로 useState 업데이트 */}
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;