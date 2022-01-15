const LOGIN = "auth/LOGIN";

export const setUserInfo = (info) => ({
  type: LOGIN,
  userInfo: {
    id: info,
  },
});

const initialState = {
  type: "",
  userInfo: {
    id: "",
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
}
