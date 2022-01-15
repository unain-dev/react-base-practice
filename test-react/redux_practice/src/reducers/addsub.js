const initialState = {
  value: 0,
};

export default function addsubReducer(state = initialState, actionb) {
  switch (actionb.type) {
    case "increment": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "reset": {
      return {
        state,
        value: 0,
      };
    }
    default:
      return state;
  }
}
