import React from "react";
import { useForm } from "react-hook-form";
import { Container,Form,Inputs,DivStyle,Button,ErrorMsg } from "./styles"
import { useNavigate } from 'react-router-dom'
import { useState } from "react/cjs/react.development";


export default function Login() {
  const [msg,setMsg] = useState(false)
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = data => {

    
    if (data.email === 'admin' && data.senha === 'admin') {
    navigate("/map")
  }}



  return (

    <Container>
     
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DivStyle>
          <h2>LOGIN</h2>
           
          
       
        <Inputs defaultValue="test" {...register("email",{ required: true })} placeholder="Email" />
          {errors.email  && <ErrorMsg>Preencha o email</ErrorMsg>}
       
       
        <Inputs {...register("senha", { required: true })} placeholder="Senha" />
          {errors.senha  && <ErrorMsg>Preencha a senha</ErrorMsg>}
        

        
          <Button type="submit" >Entrar</Button>
        </DivStyle>
          
        </Form>
      </Container>
  );
}