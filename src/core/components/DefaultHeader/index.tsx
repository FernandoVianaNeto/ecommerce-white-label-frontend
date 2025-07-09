import WarningHeader from '../WarningHeader';
import { Container, Header, Button, ButtonContainer, H1, Text, Img, CartCardContainer, ButtonText, StyledButton, CartWrapper, CartTitle, CartFooter, BlockWrapper } from './styles';
import searchIcon from '../../../assets/search-icon.svg';
import bagIcon from '../../../assets/bag-icon.svg';
import CartProduct from '../CartProduct';
import ButtonCheckout from '../Button';
// import { productMocks } from '../../../../mocks/product.mock';

function DefaultHeader() {
    const bagAmount = 2;
    const total = 446;

    const items = [
        {
            id: '1',
            name: 'Marigold Trouser Long',
            price: 78.00,
            imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
            description: 'Stylish long trousers in marigold color.',
            color: 'Marigold'
        },
        {
            id: '2',
            name: 'Cat-Eye Sunglasses',
            price: 78.00,
            imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
            description: 'Trendy cat-eye sunglasses for a chic look.',
            color: 'Marigold'
        },
        {
            id: '3',
            name: 'Leather Jacket',
            price: 150.00,
            imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
            description: 'Classic leather jacket for all seasons.',
            color: 'Marigold'
        },
    ];

    return (
        <Container>
            <WarningHeader text="Free Shipping On All U.S. Orders"/>
            <Header>
                <ButtonContainer>
                    <Button onClick={() => window.location.href = '/home'}>
                        <ButtonText>New Arrivals</ButtonText>
                    </Button>
                    <Button onClick={() => window.location.href = '/home'}><ButtonText>Shop</ButtonText></Button>
                    <Button onClick={() => window.location.href = '/home'}><ButtonText>About Us</ButtonText></Button>
                </ButtonContainer>
                <H1>
                    LOGO+
                </H1>
                <ButtonContainer>
                    <Button onClick={() => window.location.href = '/home'}>
                        <Text>Search</Text>
                        <Img src={searchIcon} alt="search icon" /></Button>
                    <Button onClick={() => window.location.href = '/home'}><ButtonText>Sign In</ButtonText></Button>
                    <CartWrapper>
                        <StyledButton>
                            <Text>Your Bag</Text>
                            <Img src={bagIcon} alt="lock icon" />
                        </StyledButton>
                        <CartCardContainer className="cart-card">
                            <CartTitle>Your Bag ({bagAmount})</CartTitle>
                            {items.map((item) => (
                                <CartProduct 
                                    key={item.id}
                                    id={item.id}
                                    title={item.name} 
                                    price={String(item.price)} 
                                    color={item.color} 
                                    imgUrl={item.imageUrl} 
                                    amount={1} 
                                />
                            ))}
                            <CartFooter>
                                <strong>Total:</strong> $446.00
                            </CartFooter>
                            <CartFooter>
                                <p style={{ color: '#9B9B9B', fontWeight: '400' }}>Shipping:</p>
                                <p style={{ color: '#9B9B9B' }}>Free</p>
                            </CartFooter>
                            <BlockWrapper>
                                <ButtonCheckout backgroundColor='none' color='#000'>View Bag</ButtonCheckout>
                                <ButtonCheckout backgroundColor='#000' color='#FFF'>Go To Checkout</ButtonCheckout>
                            </BlockWrapper>
                        </CartCardContainer>
                    </CartWrapper>
                </ButtonContainer>
            </Header>
        </Container>
    );
}

export default DefaultHeader;