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
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
    ],
  };

  render() {
    const { navigation } = this.props;
    const { products } = this.state;

    return (
      <Container>
        <Products>
          {products.map(product => (
            <>
              <Product key={product.id}>
                <ProductImage source={{ uri: product.image }} />
                <ProductInfo>
                  <ProductDescription>{product.title}</ProductDescription>
                  <Price>R${product.price}</Price>
                </ProductInfo>
                <Icon name="delete-forever" size={24} color="#7159C1" />
              </Product>
              <ProductActions>
                <Actions>
                  <Icon name="delete-forever" size={24} color="#7159C1" />
                  <ItemQuantity>0</ItemQuantity>
                  <Icon name="delete-forever" size={24} color="#7159C1" />
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
      </Container>
    );
  }
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
