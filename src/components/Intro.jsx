import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore
          quisquam fugit ratione natus soluta, nam earum fuga aliquid, sunt
          voluptatibus accusantium
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call me +48 570 628 348</Phone>
            <ContactText>For any question or consern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>123</Right>
    </Container>
  );
};

export default Intro;
