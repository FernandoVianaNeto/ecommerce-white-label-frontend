import { Container, Text } from './styles';

type WarningHeaderProps = {
  text: string;
};

function WarningHeader({ text }: WarningHeaderProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default WarningHeader;
