import { Box } from "@chakra-ui/core";
import dynamic from "next/dynamic";
import React from "react";
import Layout from "../components/Layout";

const DynamicSwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false,
});

const SwaggerDocs = () => {
  return (
    <Layout>
      <Box backgroundColor="white">
        {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
        <DynamicSwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </Box>
    </Layout>
  );
};

export default SwaggerDocs;
