import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Logo, Cart, ItemInCart, Items } from './styles';

export class Header extends Component {
  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  render() {
    const { cartSize } = this.props;
    return (
      <Container>
        <Logo />
        <Cart onPress={() => this.handleNavigate()}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemInCart>
            <Items>{cartSize}</Items>
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
