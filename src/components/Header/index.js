import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container, Logo, Cart, ItemInCart, Items, Home } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  function handleNavigate(route) {
    navigation.navigate(route);
  }

  return (
    <Container>
      <Home onPress={() => handleNavigate('Main')}>
        <Logo />
      </Home>
      <Cart onPress={() => handleNavigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemInCart>
          <Items>{cartSize}</Items>
        </ItemInCart>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
