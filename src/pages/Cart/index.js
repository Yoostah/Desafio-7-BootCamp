import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Products,
  Product,
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

export default class Cart extends Component {
  state = {
    products: [],
  };

  render() {
    const { navigation } = this.props;
    const { products } = this.state;

    return (
      <Container>
        {products.length ? (
          <Products>
            {products.map(product => (
              <>
                <Product key={product.id}>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductInfo>
                    <ProductDescription>{product.title}</ProductDescription>
                    <Price>R${product.price}</Price>
                  </ProductInfo>
                  <ProductDelete onPress={() => []}>
                    <Icon name="delete-forever" size={24} color="#7159C1" />
                  </ProductDelete>
                </Product>
                <ProductActions>
                  <Actions>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color="#7159C1"
                    />
                    <ItemQuantity>0</ItemQuantity>
                    <Icon name="add-circle-outline" size={24} color="#7159C1" />
                  </Actions>
                  <ItemTotal>R$567.99</ItemTotal>
                </ProductActions>
              </>
            ))}
            <TotalProducts>
              <TotalProductsText>Total</TotalProductsText>
              <TotalProductsValue>R$1619,10</TotalProductsValue>
            </TotalProducts>
            <BotaoFinalizar onPress={() => navigation.navigate('Main')}>
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
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
