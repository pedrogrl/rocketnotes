import { Container } from "./styles";

export default function Button({ title, loading = false, ...rest }) {
  //rest = demais atributos passados no componente pai
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
