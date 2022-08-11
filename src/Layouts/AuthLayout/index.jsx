import { Flex } from '@chakra-ui/layout';
import React from 'react';

const AuthLayout = (props) => {
  return (
    <Flex
      bgGradient='linear(to-b, primary.100, primary.300)'
      h='100vh'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      p='8rem 12rem'
    >
      {props.children}
    </Flex>
  );
};

export default AuthLayout;
