import React from 'react';
import styled from 'styled-components';
import Search from '../img/search.png';

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 1px 14px -3px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 1px 14px -3px rgba(66, 68, 90, 1);
  box-shadow: 0px 1px 14px -3px rgba(66, 68, 90, 1);
  border-radius: 20px;
`;

const Image = styled.img`
  width: 20px;
  margin: 0 auto;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const Minicard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </Container>
  );
};

export default Minicard;
