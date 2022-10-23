import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 25px 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 999px) {
    margin-right: 5px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  } ;
`;
const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
  @media (max-width: 400px) {
    margin-right: 5px;
  } ;
`;
const Copyright = styled.span``;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Vladian95</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
