import React from 'react';
import styled from 'styled-components';
import Flower from '../img/flower.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 70%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 180px;
`;

const Title = styled.span`
  font-size: 70px;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  background-color: darkblue;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={Flower} />
      </Left>
      <Right>
        <Title>
          <b>good</b> website
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubTitle>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et
          consequuntur deserunt excepturi? Similique itaque labore perspiciatis
          at. Consequuntur quos ullam animi itaque, est perferendis qui culpa
          consequatur eligendi. Illo.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
