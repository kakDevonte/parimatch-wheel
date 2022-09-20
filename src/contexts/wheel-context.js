import React from "react";
import { wheelAPI } from "../api/wheel-api";

const SET_USER = "SET_USER";
const SET_USER_INFO = "SET_USER_INFO";
const SET_USERS = "SET_USERS";
const CHANGE_USER = "CHANGE_USER";

const initialState = {
  user: {
    telegram_id: 1,
    telegram_username: "bla",
    points: 0,
    tryCount: 5,
  },
  users: [],
};

const WheelContext = React.createContext();

export const WheelContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = {
    getUser: async (id) => {
      const telegram = window.Telegram.WebApp;
      telegram.ready();
      telegram.expand();

      let currUser = {
        telegram_id: telegram.initDataUnsafe.user.id,
        telegram_username: telegram.initDataUnsafe.user.username,
        points: 0,
        tryCount: 5,
      };

      const { data } = await wheelAPI.getUser(id);

      if (!data) {
        await wheelAPI.createUser(currUser);
      } else {
        currUser = data;
      }
      dispatch({
        type: SET_USER,
        payload: currUser,
      });
    },
    changeUser: async (currUser) => {
      const { data } = await wheelAPI.updateUser(currUser);
      dispatch({
        type: CHANGE_USER,
        payload: data,
      });
    },
    getUsers: async () => {
      const { data } = await wheelAPI.getUsers();
      dispatch({
        type: SET_USERS,
        payload: data.users,
      });
    },
  };

  return (
    <WheelContext.Provider value={{ state, actions }}>
      {props.children}
    </WheelContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case SET_USERS: {
      return { ...state, users: action.payload };
    }
    case CHANGE_USER: {
      return { ...state, user: action.payload };
    }
  }
};

export const useWheelState = () => {
  return React.useContext(WheelContext).state;
};

export const useWheelActions = () => {
  return React.useContext(WheelContext).actions;
};
