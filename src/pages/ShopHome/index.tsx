import { useEffect, useState } from 'react';
import DefaultFooter from '../../core/components/DefaultFooter';
import DefaultHeader from '../../core/components/DefaultHeader';
import Product from '../../core/components/Product';
import { Container, GridWrapper, InlineWrapper, ProductGrid, Text } from './styles';
import type { ProductType } from '../../core/types/Product';

function ShopHome() {
  const productsAmount = 283

  const [products, setProducts] = useState([] as ProductType[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/product/list')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error while fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>

      <GridWrapper>
        <DefaultHeader />

        <InlineWrapper>
          <Text color="#000">Home</Text>
          <Text color="#5E5E5E">| Clothing</Text>
        </InlineWrapper>

        <Text color='#5E5E5E' fontSize='12px' marginLeft='135px'>{productsAmount} products</Text>

        <ProductGrid>
          {loading ? (
            <Text color="#5E5E5E" fontSize="16px">Loading products...</Text>
          ) : products.length === 0 ? (
            <Text color="#5E5E5E" fontSize="16px">No products found</Text>
          ) : products.map((item: ProductType) => (
            <Product 
              key={item.id}
              imgUrl={item.imageUrl}
              title={item.name}
              price={item.price.toFixed(2)}
            />
          ))}
        </ProductGrid>
      </GridWrapper>

      <DefaultFooter />
    </Container>
  );
}

export default ShopHome;