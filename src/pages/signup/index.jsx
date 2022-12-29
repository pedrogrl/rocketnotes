import Input from "../../components/Input";
import Button from "../../components/Button";
import {FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Background, Container, Form } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salavar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar"/>

        <a href="#">Fazer login</a>
      </Form>
    </Container>
  )
}