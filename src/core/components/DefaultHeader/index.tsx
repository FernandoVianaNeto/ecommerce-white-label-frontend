import { Container, Header, Button } from './styles';

function DefaultHeader() {
  return (
    <Container>
        <Header>
            <Button onClick={() => window.location.href = '/home'}>Shop</Button>
            <Button onClick={() => window.location.href = '/home'}>About Us</Button>
        </Header>
    </Container>
  );
}

export default DefaultHeader;