import { Container } from "./styles";

export default function Anchor({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}
