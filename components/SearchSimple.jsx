import {
  Box,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/routes";

const SearchSimple = ({ dispatch }) => {
  const [query, setQuery] = useState("");

  console.log("SearchSimple rerender");
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (query) getResults();
  }, [debouncedQuery]);

  const getResults = async () => {
    if (query.length < 3) return; // todo warning

    dispatch({ type: "SEARCH_START" });
    try {
      const res = await http.post(API_ENDPOINT.SEARCH_SIMPLE, {
        input: query,
      });
      dispatch({ type: "SEARCH_SUCCESS", payload: res });
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Box mt={10}>
      <InputGroup>
        <InputLeftElement>
          <Icon name="search" />
        </InputLeftElement>

        {query && (
          <InputRightElement>
            <IconButton
              size="sm"
              variant="ghost"
              icon="close"
              aria-label="Clear input"
              onClick={() => setQuery("")}
            />
          </InputRightElement>
        )}

        <Input
          placeholder="Search any release..."
          size="lg"
          value={query}
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchSimple;
