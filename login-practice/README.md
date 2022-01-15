## 구조

    ```
    src
    │  App.js
    │  index.css
    │  index.js
    │
    ├─common
    │  ├─css
    │  ├─lib
    │  │  └─api
    │  │
    │  └─store
    │      │  index.js                  // module reducer를 묶음
    │      │
    │      └─modules
    │              auth.js              // 인증관련 store, reducer
    │
    └─views
        ├─base
        │  │  menu.json
        │  │
        │  ├─components
        │  │      main-footer.js
        │  │      main-header.js       // login, signup 버튼을 Link to로 라우팅함.
        │  │      main-sidebar.js
        │  │      sign-up.js
        │  │
        │  ├─login
        │  │      login-container.js    // dispatch 등으로 실질적인 reducer 핸들링하는 컴포넌트
        │  │      login-dialog.js       // 로그인 form을 모달로 담은 컴포넌트.
        │  │
        │  └─modals
        │          modal.css
        │          Modal.js
        └─home
                Home.js
    ```
