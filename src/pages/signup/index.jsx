import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Background, Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "../../services/api";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignup() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível concluir o cadastro.");
      }
    }
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salavar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(ev) => setName(ev.target.value)}
        />

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

        <Button title="Cadastrar" onClick={handleSignup} />

        <Link to="/">Fazer login</Link>
      </Form>
    </Container>
  );
}
