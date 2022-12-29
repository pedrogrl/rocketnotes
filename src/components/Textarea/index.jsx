import { Container } from "./styles";

export default function Textarea({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}
