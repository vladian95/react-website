import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Price = () => {
  return (
    <Container>
      <PriceCard />
      <PriceCard />
      <PriceCard />
    </Container>
  );
};

export default Price;
