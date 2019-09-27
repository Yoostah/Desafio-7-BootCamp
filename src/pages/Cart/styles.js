import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #111;
`;

export const Carrinho = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const CarrinhoText = styled.Text`
  text-align: center;
`;
export const BotaoVoltarText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BotaoVoltar = styled(RectButton)`
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin: auto 15px;
  padding: 10px;
  align-items: center;
`;
