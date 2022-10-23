import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 1px 14px -3px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 1px 14px -3px rgba(66, 68, 90, 1);
  box-shadow: 0px 1px 14px -3px rgba(66, 68, 90, 1);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 722px) {
    padding: 10px;
  } ;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 722px) {
    font-size: 20px;
  } ;
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0px;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  background-color: #fff;
  @media (max-width: 722px) {
    margin: 0px;
  } ;
`;

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0px;
  @media (max-width: 722px) {
    margin: 5px;
  } ;
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: #fff;
  font-size: 16px;
  padding: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type}</Type>
      <List>
        <ListItem>200 Hand-Craftes Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ prebuild Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
