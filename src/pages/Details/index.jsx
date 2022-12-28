import Header from "../../components/Header/index.jsx";
import Section from "../../components/Section/index.jsx";
import Button from "../../components/Button/index.jsx";
import Anchor from "../../components/Anchor/index.jsx";
import Tag from "../../components/Tag/index.jsx";

import { Container, Content, Links } from "./styles.js";

export default function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Anchor title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores, modi fuga minus iure possimus eius molestias esse odit
            magni assumenda commodi dolor enim sapiente harum necessitatibus
            tenetur earum qui.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://github.com/</a></li>
              <li><a href="#">https://github.com/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
      
    </Container>
  );
}
