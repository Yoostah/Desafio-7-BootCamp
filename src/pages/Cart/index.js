import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Carrinho,
  CarrinhoText,
  BotaoVoltar,
  BotaoVoltarText,
} from './styles';

export default class Cart extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Carrinho>
          <CarrinhoText>Carrinho</CarrinhoText>
        </Carrinho>
        <BotaoVoltar onPress={() => navigation.navigate('Main')}>
          <BotaoVoltarText>Voltar</BotaoVoltarText>
        </BotaoVoltar>
      </Container>
    );
  }
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
