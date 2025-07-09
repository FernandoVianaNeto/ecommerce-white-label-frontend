import WarningHeader from '../WarningHeader';
import { Container, Header, Button, ButtonContainer } from './styles';

function DefaultHeader() {
  return (
    <Container>
        <WarningHeader text="Free Shipping On All U.S. Orders"/>
        <Header>
            <ButtonContainer>
                <Button onClick={() => window.location.href = '/home'}>Shop</Button>
                <Button onClick={() => window.location.href = '/home'}>About Us</Button>
            </ButtonContainer>
           
        </Header>
    </Container>
  );
}

export default DefaultHeader;