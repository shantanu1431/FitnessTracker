import React from 'react'
import {styled} from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Container = styled.div`
width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  `;

  const Span  = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
  `;

const SignIn = () => {
  return (
    <Container>
        <div>
            <Title>Welcome to Fittrack</Title>
            <Span>Please login with your details</Span>
        </div>
        <div style={{
            diplay:"flex",
            gap:"20px",
            flexDirection: "column",
        }}>
            <TextInput 
            label="Email Addres"
            placeholder="Enter your Email address" />
            <TextInput 
            label="Password"
            placeholder="Enter your Password" />
            <Button text="SignIn" />
        </div>
    </Container>
  )
}

export default SignIn;
