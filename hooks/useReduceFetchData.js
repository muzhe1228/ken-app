import { useReducer, useEffect } from "react";
import request from "../utils/request";

// 初始化状态
const initialState = {
  data: [],
  loading: true,
  error: false,
};

// 定义action类型
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const SET_DATA = "SET_DATA";
const RESET_STATE = "RESET_STATE";

// 定义 reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: false };
    case FETCH_ERROR:
      return { ...state, loading: false, error: true };
    case SET_DATA:
      return { ...state, data: action.payload };
    case RESET_STATE:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};

const useReduceFetchData = (url, options = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const res = await request(url, options);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  const onReload = async () => {
    console.log("onReload");
    dispatch({ type: RESET_STATE });
    await fetchData();
  };

  const setData = (data) => dispatch({ type: SET_DATA, payload: data });

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return {
    ...state,
    setData,
    onReload,
  };
};

export default useReduceFetchData;
