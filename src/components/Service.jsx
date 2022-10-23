import React from 'react';
import styled from 'styled-components';
import Minicard from './Minicard';
import AnimatedShapes from './AnimatedShapes';
import Play from '../img/play.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 516px) {
    margin-top: 0px;
  }
  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  margin-top: 20px;
  padding: 0px 80px;
  text-align: center;
  color: #555;
  @media (max-width: 516px) {
    margin-top: 10px;
  }
  @media (max-width: 450px) {
    margin-top: 0px;
    font-size: 17px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 90px;
  @media (max-width: 516px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  @media (max-width: 450px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 180px;
  border: none;
  color: #fff;
  border-radius: 10px;
  font-size: 20px;
  padding: 15px;
  background-color: green;
  cursor: pointer;
  margin-top: 120px;
  display: flex;
  align-items: center;
  @media (max-width: 516px) {
    margin-top: 0px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Service = () => {
  return (
    <Container>
      <Title>Simple process to start</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        adipisci, sint doloremque dolore rerum ratione debitis aliquid sapiente
        earum cum eveniet corrupti dolorem consectetur voluptatum provident
        aliquam vero magni repellat!
      </SubTitle>
      <CardContainer>
        <Minicard />
        <Minicard />
        <Minicard />
      </CardContainer>
      <Button>
        <Icon src={Play} />
        How it works
      </Button>
      <AnimatedShapes />
    </Container>
  );
};

export default Service;
