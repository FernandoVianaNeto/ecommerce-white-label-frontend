import DefaultHeader from '../../core/components/DefaultHeader';
import Product from '../../core/components/Product';
import { Container, GridWrapper, InlineWrapper, ProductGrid, Text } from './styles';

function ShopHome() {
  const productsAmount = 283

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
    {
      id: '4',
      name: 'Leather Jacket',
      price: 150.00,
      imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
      description: 'Classic leather jacket for all seasons.',
      color: 'Marigold'
    },
    {
      id: '4',
      name: 'Leather Jacket',
      price: 150.00,
      imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
      description: 'Classic leather jacket for all seasons.',
      color: 'Marigold'
  },{
    id: '4',
    name: 'Leather Jacket',
    price: 150.00,
    imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
    description: 'Classic leather jacket for all seasons.',
    color: 'Marigold'
  },{
    id: '4',
    name: 'Leather Jacket',
    price: 150.00,
    imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
    description: 'Classic leather jacket for all seasons.',
    color: 'Marigold'
  },{
    id: '4',
    name: 'Leather Jacket',
    price: 150.00,
    imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
    description: 'Classic leather jacket for all seasons.',
    color: 'Marigold'
  },{
    id: '4',
    name: 'Leather Jacket',
    price: 150.00,
    imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
    description: 'Classic leather jacket for all seasons.',
    color: 'Marigold'
  },{
    id: '4',
    name: 'Leather Jacket',
    price: 150.00,
    imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
    description: 'Classic leather jacket for all seasons.',
    color: 'Marigold'
  },{
    id: '4',
    name: 'Leather Jacket',
    price: 150.00,
    imageUrl: 'https://img.elo7.com.br/product/zoom/4F85F6D/bolsa-esmeralda-bolsacroche.jpg',
    description: 'Classic leather jacket for all seasons.',
    color: 'Marigold'
  },
];

  return (
    <Container>
      <DefaultHeader />
      <GridWrapper>
        <InlineWrapper>
          <Text color="#000">Home</Text>
          <Text color="#5E5E5E">| Clothing</Text>
        </InlineWrapper>
        <Text color='#5E5E5E' fontSize='12px'>{productsAmount} products</Text>
        <ProductGrid>
          {items.map((item) => (
            <Product 
              key={item.id}
              imgUrl={item.imageUrl}
              title={item.name}
              price={item.price.toFixed(2)}
            />
          ))}
        </ProductGrid>
      </GridWrapper>
    </Container>
  );
}

export default ShopHome;