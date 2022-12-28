import { Container } from "./styles";

export default function Anchor({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}
