import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/core";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clear } from "..//redux/slices/searchSlice";
import { useDebounce } from "../hooks/useDebounce";
import { searchSimple } from "../redux/slices/searchSlice";

const SearchSimple = ({}) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (query) getResults();
    else handleClear();
  }, [debouncedQuery]);

  const getResults = async () => {
    if (query.length < 3) {
      // todo warning
      return;
    }
    dispatch(searchSimple({ input: query }));
  };

  const handleClear = () => {
    setQuery("");
    dispatch(clear());
  };

  return (
    <Box mt={10}>
      <FormControl>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>

          {query && (
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
            borderRadius="md"
            variant="filled"
            placeholder="Search any release..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default SearchSimple;
