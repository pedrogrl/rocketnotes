import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js'

import Header from '../../components/Header/index.jsx'
import Anchor from '../../components/Anchor/index.jsx'
import Input from '../../components/Input/index.jsx'

export default function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><Anchor title="Todos" isActive/></li>
        <li><Anchor title="React"/></li>
        <li><Anchor title="Nodejs"/></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}