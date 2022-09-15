import React from 'react';
import { wheelAPI } from '../api/wheel-api';

const SET_USER = 'SET_USER';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_WINNERS = 'SET_WINNERS';
const ADD_WINNER = 'ADD_WINNER';
const CHANGE_BALANCE = 'CHANGE_BALANCE';

const initialState = {
  userInfo: null,
  user: null,
  winners: [],
};
const WheelContext = React.createContext();

export const WheelContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = {
    getUser: async (id) => {
      let currUser = { id, balance: 1000 };
      const { data } = await wheelAPI.getUser(id);

      if (!data.user) {
        await wheelAPI.createUser(currUser);
      } else {
        currUser = data.user;
      }

      dispatch({
        type: SET_USER,
        payload: currUser,
      });
    },
    changeBalance: async (currUser) => {
      const { data } = await wheelAPI.changeBalance(currUser);
      dispatch({
        type: CHANGE_BALANCE,
        payload: data.user,
      });
    },
    getWinners: async () => {
      const { data } = await wheelAPI.getWinners();

      dispatch({
        type: SET_WINNERS,
        payload: data.winners,
      });
    },
    addWinner: async (winner) => {
      const { data } = await wheelAPI.addWinner(winner);

      dispatch({
        type: SET_WINNERS,
        payload: data.winners,
      });
    },
    setUserInfo: (info) => {
      dispatch({
        type: SET_USER_INFO,
        payload: info,
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
    case SET_WINNERS: {
      return { ...state, winners: action.payload };
    }
    case ADD_WINNER: {
      return { ...state, winners: action.payload };
    }
    case CHANGE_BALANCE: {
      return { ...state, user: action.payload };
    }
    case SET_USER_INFO: {
      return { ...state, userInfo: action.payload };
    }
  }
};

export const useWheelState = () => {
  return React.useContext(WheelContext).state;
};

export const useWheelActions = () => {
  return React.useContext(WheelContext).actions;
};
