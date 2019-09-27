import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Container, Logo, Cart, ItemInCart, Items } from './styles';

export default class Header extends Component {
  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  render() {
    return (
      <Container>
        <Logo />
        <Cart onPress={() => this.handleNavigate()}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemInCart>
            <Items>2</Items>
          </ItemInCart>
        </Cart>
      </Container>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
