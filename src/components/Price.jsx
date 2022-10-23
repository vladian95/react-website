import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 722px) {
    flex-direction: column;
  } ;
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="10" type="basic" />
      <PriceCard price="20" type="premium" />
      <PriceCard price="30" type="advanced" />
      <AnimatedShapes />
    </Container>
  );
};

export default Price;
