// import { ElementTypes } from '@/helper/types';
import React from 'react';
import { Container } from 'react-bootstrap';
const Tag = ({ children }: any) => {
  const alphabets = ['a', 'b', 'c'];

  return (
    <>
      <Container>{children}</Container>
    </>
  );
};
export default Tag;
