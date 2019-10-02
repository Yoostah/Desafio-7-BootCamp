import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import Numeral from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Products,
  Product,
  ProductData,
  BotaoFinalizar,
  BotaoFinalizarText,
  ProductInfo,
  ProductImage,
  Price,
  ProductDescription,
  ProductActions,
  ItemQuantity,
  Actions,
  ItemTotal,
  TotalProducts,
  TotalProductsText,
  TotalProductsValue,
  ProductDelete,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: Numeral(product.price * product.amount).format('$#,##0.00'),
    }))
  );

  const total = useSelector(state =>
    Numeral(
      state.cart.reduce((totalProducts, product) => {
        return totalProducts + product.price * product.amount;
      }, 0)
    ).format('$#,##0.00')
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <Products>
          {cart.map(product => (
            <ProductData key={String(product.id)}>
              <Product>
                <ProductImage source={{ uri: product.image }} />
                <ProductInfo>
                  <ProductDescription>{product.title}</ProductDescription>
                  <Price>{product.priceFormatted}</Price>
                </ProductInfo>
                <ProductDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <Icon name="delete-forever" size={24} color="#7159C1" />
                </ProductDelete>
              </Product>
              <ProductActions>
                <Actions>
                  <Icon
                    name="remove-circle-outline"
                    size={24}
                    color="#7159C1"
                    onPress={() => decrement(product)}
                  />
                  <ItemQuantity>{product.amount}</ItemQuantity>
                  <Icon
                    name="add-circle-outline"
                    size={24}
                    color="#7159C1"
                    onPress={() => increment(product)}
                  />
                </Actions>
                <ItemTotal>{product.subtotal}</ItemTotal>
              </ProductActions>
            </ProductData>
          ))}
          <TotalProducts>
            <TotalProductsText>Total</TotalProductsText>
            <TotalProductsValue>{total}</TotalProductsValue>
          </TotalProducts>
          <BotaoFinalizar
            onPress={() =>
              Alert.alert(
                ':: ROCKETSHOES ::',
                'Deseja finalizar sua Compra?',
                [
                  {
                    text: 'Não',
                    onPress: () => {
                      return false;
                    },
                    style: 'cancel',
                  },
                  {
                    text: 'Sim',
                    onPress: () =>
                      dispatch(
                        CartActions.shoppingDone(),
                        navigation.navigate('Main'),
                        Alert.alert(
                          ':: ROCKETSHOES ::',
                          'Obrigado e Volte Sempre!'
                        )
                      ),
                  },
                ],
                { cancelable: false }
              )
            }
          >
            <BotaoFinalizarText>Finalizar Pedido</BotaoFinalizarText>
          </BotaoFinalizar>
        </Products>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
