import React from 'react';
import { Flex, Code, Text, Link } from '@chakra-ui/react';

// the main for installer
export default ({ ...props }) => {
  return (
    <Flex w="100%" {...props} justifyContent="center" alignItems="center">
      <Text>
        Welcome to use{' '}
        <Link target="_blank" href="https://labs.zoe.im/gowindle">
          gowindle
        </Link>{' '}
        for application bundle!
      </Text>
    </Flex>
  );
};
