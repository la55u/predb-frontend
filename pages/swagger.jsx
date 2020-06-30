import { Box } from "@chakra-ui/core";
import React from "react";
import SwaggerUI from "swagger-ui-react";
import Layout from "../components/Layout";

const SwaggerDocs = () => {
  return (
    <Layout>
      <Box backgroundColor="white">
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </Box>
    </Layout>
  );
};

export default SwaggerDocs;
