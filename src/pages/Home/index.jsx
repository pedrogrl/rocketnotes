import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js";

import Header from "../../components/Header/index.jsx";
import Anchor from "../../components/Anchor/index.jsx";
import Input from "../../components/Input/index.jsx";
import Note from "../../components/Note/index.jsx";
import Section from "../../components/Section/index.jsx";
import Tag from "../../components/Tag/index.jsx";

import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export default function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = selectedTags.includes(tagName);
    if (alreadySelected) {
      const filteredTags = selectedTags.filter((tag) => tag != tagName);
      return setSelectedTags(filteredTags);
    }

    setSelectedTags((prevState) => [...prevState, tagName]);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectedTags}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <Anchor
            title="Todos"
            isActive={selectedTags.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <Anchor
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note key={String(note.id)} data={note} />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
