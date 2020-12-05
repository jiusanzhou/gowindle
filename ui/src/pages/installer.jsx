import React from 'react';
import {
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  ProgressLabel,
  Text,
} from '@chakra-ui/react';

export default ({ ...props }) => {
  return (
    <Center w="100%">
      <Box w="100%">
        <Text>在线安装...</Text>

        <Box p="2">
          <CircularProgress value="30">
            <CircularProgressLabel>100%</CircularProgressLabel>
          </CircularProgress>
        </Box>

        <Box p="2">
          <Progress value="30">
            <ProgressLabel>30%</ProgressLabel>
          </Progress>
        </Box>

        <Button>立即安装</Button>
      </Box>
    </Center>
  );
};
