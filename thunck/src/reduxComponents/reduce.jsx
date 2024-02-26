const initialState = {
  items: [],
  loading: false,
  error: null,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
      case "REQUEST_FETCHDATA":
          return {
              ...state,
              loading: true,
              error: null
          };
      case "COMPLETED":
          return {
              ...state,
              loading: false,
              items: action.payload
          };
      case "UNSUCESSFULL":
          return {
              ...state,
              loading: false,
              error: action.error
          };
      default:
          return state;
  }
};

export default Reducer;