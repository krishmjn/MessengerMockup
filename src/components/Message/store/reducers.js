import {
  FETCH_MORE_USERS_SUCCESS,
  FETCH_USERS_SUCCESS,
  PROFILE_STATE,
  SELECt_USER,
} from "./action";

// reducers.js
const initialState = {
  users: [],
  page: 1,
  selectedUserId: null,
  profileState: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      console.log(action.payload.data, 999);
      return { ...state, users: action.payload.data, page: 2 }; // start at page 2 for further requests
    case FETCH_MORE_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload.data],
        page: state.page + 1,
      };
    case SELECt_USER:
      console.log(action.payload, "id");
      return {
        ...state,
        selectedUserId: action.payload.data,
      };
    case PROFILE_STATE:
      return {
        ...state,
        profileState: !state.profileState,
      };
    default:
      return state;
  }
};
