import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import Numeral from 'numeral';
import * as CartActions from '../../store/modules/cart/actions';
import 'numeral/locales/pt-br';

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

export default function Main() {
  Numeral.locale('pt-br');

  const amountInCart = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: Numeral(product.price).format('$#,##0.00'),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  function addToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <Produtos
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => {
          return (
            <Produto>
              <ProductImage source={{ uri: item.image }} />
              <Description>{item.title}</Description>
              <Price>{item.priceFormatted}</Price>
              <AddToCartButton>
                <CartQty>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <CartQtyNum>{amountInCart[item.id] || 0}</CartQtyNum>
                </CartQty>
                <AddToCartButtonText onPress={() => addToCart(item.id)}>
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
