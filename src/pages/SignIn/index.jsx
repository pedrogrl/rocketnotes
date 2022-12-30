import Input from "../../components/Input";
import Button from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";
import { Background, Container, Form } from "./styles";

import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salavar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
