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
import { clearSimple, setSimpleSearch } from "..//redux/slices/searchSlice";
import { searchSimple } from "../redux/slices/searchSlice";

function debounce(callback, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

const SearchSimple = () => {
  const dispatch = useDispatch();
  const simpleSearch = useSelector((s) => s.search.simpleSearch);
  const page = useSelector((s) => s.search.page);

  const inputRef = useRef();

  const handleSearch = () => {
    dispatch(setSimpleSearch(inputRef.current.value));
  };

  const handleChange = useCallback(debounce(handleSearch, 400), []);

  useEffect(() => {
    if (simpleSearch) dispatch(searchSimple({ input: simpleSearch, page }));
  }, [page, simpleSearch]);

  const handleClear = () => {
    inputRef.current.value = "";
    dispatch(clearSimple());
  };

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
          defaultValue={simpleSearch}
          aria-label="Search by release name"
          //onChange={(e) => setQuery(e.target.value)}
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchSimple;
