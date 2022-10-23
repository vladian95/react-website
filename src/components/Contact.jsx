import React from 'react';
import styled from 'styled-components';
import Map from '../img/map.png';
import Phone from '../img/phone.png';
import Send from '../img/send.png';

const Container = styled.div`
  scroll-behavior: smooth;
  height: 90%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 999px) {
    flex-direction: column;
    justify-content: space-between;
  } ;
`;

const FormContainer = styled.div`
  width: 50%;
  @media (max-width: 999px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  } ;
`;

const Title = styled.h1`
  margin-left: 100px;
  margin-bottom: 20px;
  @media (max-width: 999px) {
    font-size: 30px;
    margin-left: 0px;
  } ;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 999px) {
    flex-direction: column;
    margin-top: 15px;
    height: 100%;
  } ;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media (max-width: 999px) {
    margin-right: 0px;
    height: 50%;
  } ;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  @media (max-width: 999px) {
    margin-bottom: 10px;
  } ;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media (max-width: 999px) {
    height: 25%;
    margin-top: 15px;
    width: 172px;
    padding: 20px;
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
  @media (max-width: 999px) {
    margin-top: 20px;
  } ;
`;

const AdressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AdressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-size: 20px;
  @media (max-width: 999px) {
    font-size: 15px;
  } ;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Lets Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your message" />
              <Button>SEND</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AdressContainer>
          <AdressItem>
            <Icon src={Map} />
            <Text>USA, NY, Park Avenue 95</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Phone} />
            <Text>+48 570 628 348</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Send} />
            <Text>kvankvan1995@gmail.com</Text>
          </AdressItem>
        </AdressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
