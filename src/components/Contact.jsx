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

const AdressContainer = styled.div``;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer></FormContainer>
        <AdressContainer></AdressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
