import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
height: 100vh;
background: #6C7A89;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  
`;
export const Form = styled.form`
  justify-content: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight:500;

`;

export const Inputs = styled.input`
  background: #C2C9CF;
  margin-top:10px;
  padding:15px;
  border:none;
  width: 70%;

`;
export const DivStyle = styled.div`
  padding-top:20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items:center;
  background: white;
  width: 300px;
  height: 330px;

  
`;

export const Button = styled.button`
  background: #1BA39C;

  margin-top:20px;

  border:none;
  width: 81%;
  height: 45px;
  color:white;

  
`;
export const ErrorMsg = styled.p`
  color:red;
  font-size:10px;

  
`;

