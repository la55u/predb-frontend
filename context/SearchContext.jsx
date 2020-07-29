import { createContext } from "react";

export function searchReducer(state, action) {
  switch (action.type) {
    case "SEARCH_START":
      return { loading: true, error: null, data: null };
    case "SEARCH_SUCCESS":
      return { loading: false, error: null, data: action.payload };
    case "SEARCH_FAIL":
      return { loading: false, error: action.payload, data: null };
  }
}

export const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const SearchContext = createContext(null);
export const StateContext = createContext(null);
