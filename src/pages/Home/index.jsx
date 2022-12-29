import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js";

import Header from "../../components/Header/index.jsx";
import Anchor from "../../components/Anchor/index.jsx";
import Input from "../../components/Input/index.jsx";
import Note from "../../components/Note/index.jsx";
import Section from "../../components/Section/index.jsx";
import Tag from "../../components/Tag/index.jsx";

export default function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><Anchor title="Todos" isActive /></li>
        <li><Anchor title="React" /></li>
        <li><Anchor title="Nodejs" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React', 
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'front-end'},
            ]
            }}
          />
        </Section>
      </Content>
        
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
