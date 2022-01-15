## A305 형다은 SubPJT1 branch

### 구현 스택

- Frontend
- React
- styled-components
- Redux

### 작업 방향성

> react를 기초부터 차근차근 복습 하는 과정으로 생각하고 참여했습니다. 실제 토큰을 발급/소멸하는 과정은 백엔드에서의 작업을 거쳐야하는 것으로, 제외하고 구현을 목표했습니다. 구현 과정에서 redux 학습 필요성을 느껴 redux로 전역 값을 구성하는 방식을 공부&구현 중입니다.

> 스타일은 styled-components를 사용해 구현했습니다. 그 외 회원가입/로그인 폼에 모달을 사용하고, 모달 창을 닫으면 다시 이 전에 접속했던 주소로 갈 수 있도록 history 객체를 react-router-dom에서 import 받아와서 구현했습니다.

### 구동 방법

> npm install

> npm start

### subPJT1 구현 내용

- [x] 명세서 파악
- [x] 기존 vue.js 프로젝트 구조 파악
- [x] 로그인/회원가입 UI 구현(모달 사용)
- [x] styled-components 사용
- [x] 모달 창 닫으면 history를 사용해 이 전 접속 페이지로 이동
- [ ] 사용자 입력 값 전역 관리
- [ ] 로그인/로그아웃/회원가입 토큰 관리 -> 백엔드 구축 후 구현 필요
