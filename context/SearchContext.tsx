import { createContext } from "react";

export interface DataInterface {
  took: number;
  took_mongo: number;
  results: number;
  values: Array<any>;
}

export interface SearchContextInterface {
  // data: DataInterface;
  // error: boolean;
  // loading: boolean;
  dispatch: Function;
}

export interface StateContextInterface {
  data: DataInterface;
  error: boolean;
  loading: boolean;
}

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

export const SearchContext = createContext<SearchContextInterface | null>(null);
export const StateContext = createContext<StateContextInterface | null>(null);
