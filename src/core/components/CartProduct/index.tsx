import { Button, ButtonContainer, CartCard, Container, DeleteButton, Div, Img, InfoContainer, Text, Title } from "./styles";
import deleteIcon from '../../../assets/delete-icon.svg';

export interface CartProductProps {
    id: string;
    title: string;
    price: string;
    color: string;
    amount: number;
    imgUrl: string;
}

function CartProduct({ id, title, price, color, amount, imgUrl }: CartProductProps) {
  return (
    <CartCard>
      <Img src={imgUrl} />
      <InfoContainer>
        <Container>
            <Title>{title}</Title>
            <Title>${price}</Title>
        </Container>
        <Text>Color: {color}</Text>
        <Text>Amount: {amount}</Text>
        <ButtonContainer>
            <Div>
                <Button>-</Button>
                <Button>+</Button>
            </Div>
            <DeleteButton>
                <img src={deleteIcon} alt="Delete Icon" />
            </DeleteButton>
        </ButtonContainer>
      </InfoContainer>
    </CartCard>
  );
}

export default CartProduct;
