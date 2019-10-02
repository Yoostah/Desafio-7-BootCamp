import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  justify-content: space-between;
  align-items: baseline;
  padding: 20px;
  flex-direction: row;
  background: #000;
`;

export const Home = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ItemInCart = styled.View`
  position: absolute;
  left: 50%;
  bottom: 50%;
  background: #7159c1;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const Items = styled.Text`
  color: #fff;
  font-size: 10px;
`;
