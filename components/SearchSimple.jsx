import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSimple } from "..//redux/slices/searchSlice";
import { useDebounce } from "../hooks/useDebounce";
import { searchSimple } from "../redux/slices/searchSlice";

function debounce(callback, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

const SearchSimple = ({}) => {
  //const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  // const debouncedQuery = useDebounce(query, 200);
  const simpleSearch = useSelector((s) => s.search.simpleSearch);
  const inputRef = useRef();

  const handleClear = () => {
    //setQuery("");
    inputRef.current.value = "";
    dispatch(clearSimple());
  };

  const handleSearch = (e) => {
    const query = inputRef.current.value;
    if (query.length === 0) {
      handleClear();
    } else if (query.length < 3) {
      // todo warning
      return;
    } else {
      dispatch(searchSimple({ input: query }));
    }
  };

  const handleChange = useCallback(debounce(handleSearch, 500), []);

  return (
    <Box mt={10}>
      <InputGroup size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>

        {simpleSearch && (
          <InputRightElement>
            <IconButton
              size="sm"
              variant="ghost"
              icon={<CloseIcon />}
              aria-label="Clear input"
              onClick={handleClear}
            />
          </InputRightElement>
        )}

        <Input
          ref={inputRef}
          borderRadius="lg"
          shadow="md"
          variant="filled"
          placeholder="Search any release..."
          // value={query}
          aria-label="Search by release name"
          //onChange={(e) => setQuery(e.target.value)}
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchSimple;
