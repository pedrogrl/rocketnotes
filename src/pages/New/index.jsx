import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import NoteItem from "../../components/NoteItem";
import Section from "../../components/Section";
import Textarea from "../../components/Textarea";

import { Container, Form } from "./styles";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deletedLink) {
    setLinks(prevstate => prevstate.filter(link => link != deletedLink))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={index}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(ev) => setNewLink(ev.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="https://github.com" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
