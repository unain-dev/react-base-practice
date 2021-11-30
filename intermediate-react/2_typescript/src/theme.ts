import { DefaultTheme } from "styled-components";

// 1-4. styled.d.ts에서 정의한 DefaultTheme를 구현(구현체). 상세한 값을 인가.
export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};