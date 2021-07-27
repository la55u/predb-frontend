import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSimple } from "..//redux/slices/searchSlice";
import { searchSimple } from "../redux/slices/searchSlice";

function debounce(callback, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

const SearchSimple = () => {
  const page = useSelector((s) => s.search.page);
  const dispatch = useDispatch();
  const simpleSearch = useSelector((s) => s.search.simpleSearch);
  const inputRef = useRef();

  useEffect(() => {
    if (page && inputRef.current.value) {
      dispatch(searchSimple({ input: inputRef.current.value, page: page }));
    }
  }, [page]);

  const handleClear = () => {
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
          type="search"
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
