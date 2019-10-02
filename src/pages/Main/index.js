import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';

import Numeral from 'numeral';

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

import api from '../../services/api';

function Main({ props }) {
  /* static navigationOptions = {
    title: 'RocketShoes',
  }; */

  const [products, setProducts] = useState([]);

  function addToCart(product) {
    const { dispatch } = props;

    dispatch({
      type: '@cart/ADD_SUCCESS',
      product,
    });
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: Numeral(product.price).format('$0.00'),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

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
              <Price>{item.priceFormatted}</Price>
              <AddToCartButton>
                <CartQty>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <CartQtyNum>1</CartQtyNum>
                </CartQty>
                <AddToCartButtonText onPress={() => addToCart(item)}>
                  Adicionar
                </AddToCartButtonText>
              </AddToCartButton>
            </Produto>
          );
        }}
      />
    </Container>
  );
}

export default connect()(Main);
