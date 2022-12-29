import Header from "../../components/Header";
import Input from "../../components/Input";
import NoteItem from "../../components/NoteItem";
import Section from "../../components/Section";
import Textarea from "../../components/Textarea";

import { Container, Form } from "./styles";

export default function New() {
  return (
    <Container>
      <Header/>
  
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://github.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
        </Form>
      </main>
    </Container>
  )
}