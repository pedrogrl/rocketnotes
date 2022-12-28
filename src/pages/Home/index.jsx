import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js'

import Header from '../../components/Header/index.jsx'

export default function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu></Menu>

      <Search></Search>

      <Content></Content>

      <NewNote></NewNote>
    </Container>
  )
}