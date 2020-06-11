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
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/routes";

const SearchSimple = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    try {
      const res = await http.post(API_ENDPOINT.SEARCH_SIMPLE, { input: query });
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
