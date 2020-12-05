import React from 'react';
import { Box } from "@chakra-ui/react";

export default ({ children, header = {}, footer = {}, ...props }) => {
    return (
      <Box as="main" h="100vh" w="100vw">
        <Box maxH="30rem" maxW="40rem" d="flex" {...props}>
          {children}
        </Box>
      </Box>
    );
  };