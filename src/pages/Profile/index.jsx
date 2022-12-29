import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, Form, Avatar } from "./styles"

import { Link } from "react-router-dom"

export default function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/pedrogrl.png" 
            alt="Imagem do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input type="file" id="avatar"/>
          </label>
        </Avatar>

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
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>

      </Form>

    </Container>
  )
}