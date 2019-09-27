import React, { Component } from 'react';
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

export default class Main extends Component {
  static navigationOptions = {
    title: 'RocketShoes',
  };

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
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Chuteira Futsal Nike Beco 2 - Cinza e Branco',
        price: 99.99,
        image:
          'https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2/26/HZM-0953-226/HZM-0953-226_zoom1.jpg',
      },
      {
        id: 6,
        title: 'Chuteira Futsal Nike Bravata II IC - Amarelo e Preto',
        price: 99.99,
        image:
          'https://static.netshoes.com.br/produtos/chuteira-futsal-nike-bravata-ii-ic/74/HZM-0975-274/HZM-0975-274_zoom1.jpg',
      },
      {
        id: 4,
        title: 'Sapatênis Couro Cavalera Marcos Masculino - Preto',
        price: 119.99,
        image:
          'https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_zoom1.jpg',
      },
    ],
  };

  render() {
    const { products } = this.state;
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
}
