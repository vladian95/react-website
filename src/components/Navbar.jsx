import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  scroll-behavior: smooth;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  text-decoration: underline crimson;
  margin-right: 10px;
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 819px) {
    display: none;
  } ;
`;

const MenuItem = styled.a`
  margin-right: 30px;
  list-style: none;
  font-size: 20px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
`;

const Button = styled.button`
  border: 2px solid black;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid #fff;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Vladian95</Logo>
          <Menu>
            <MenuItem href="#Home">Home</MenuItem>
            <MenuItem href="#Features">Features</MenuItem>
            <MenuItem href="#Service">Services</MenuItem>
            <MenuItem href="#Price">Pricing</MenuItem>
            <MenuItem href="#Contact">Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
