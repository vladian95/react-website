import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div``;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
`;

const AdressContainer = styled.div``;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <LeftForm>
            <Input placeholder="Your name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Subject" />
          </LeftForm>
          <RightForm>
            <TextArea placeholder="Your message" />
          </RightForm>
        </FormContainer>
        <AdressContainer></AdressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
