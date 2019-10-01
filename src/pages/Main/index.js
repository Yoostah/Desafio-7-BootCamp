import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Produto,
  ProductImage,
  Description,
  Price,
  CartQty,
  AddToCartButton,
  Produtos,
  AddToCartButtonText,
  CartQtyNum,
} from './styles';

function Main() {
  /* static navigationOptions = {
    title: 'RocketShoes',
  }; */

  const [products, setProducts] = useState([]);

  return (
    <Container>
      <Produtos
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <Produto>
              <ProductImage source={{ uri: item.image }} />
              <Description>{item.title}</Description>
              <Price>R${item.price}</Price>
              <AddToCartButton>
                <CartQty>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <CartQtyNum>1</CartQtyNum>
                </CartQty>
                <AddToCartButtonText>Adicionar</AddToCartButtonText>
              </AddToCartButton>
            </Produto>
          );
        }}
      />
    </Container>
  );
}

export default Main;
