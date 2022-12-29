import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export default function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/pedrogrl.png" alt="Imagem do usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Pedro Oliveira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  ) 
}