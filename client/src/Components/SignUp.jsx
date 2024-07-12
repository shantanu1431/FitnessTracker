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
padding:10px;
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

const SignUp = () => {
  return (
    <Container>
        <div>
            <Title>Create New Account</Title>
            <Span>Please Enter details to create new account</Span>
        </div>
        <div style={{
            diplay:"flex",
            gap:"20px",
            flexDirection: "column",
        }}>
            
            <TextInput 
            label="Full Name"
            placeholder="Enter your Full Name" />
            <TextInput 
            label="Email Address"
            placeholder="Enter your Email address" />
            
            <TextInput 
            label="Password"
            placeholder="Enter your Password" />

            <Button text="SignUp" />
        </div>
    </Container>
  )
}
export default SignUp;
