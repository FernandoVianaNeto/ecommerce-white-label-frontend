import { Container, Img, Text } from "./styles";

interface ProductProps {
    imgUrl: string;
    title: string;
    price: string;
    children?: React.ReactNode;
}

const Product = ({ imgUrl, title, price }: ProductProps) => {
    return (
        <Container>
            <Img src={imgUrl}/>
            <Text>{title}</Text>
            <Text fontSize="18px">${price}</Text>
        </Container>
    );
};
  
  export default Product;