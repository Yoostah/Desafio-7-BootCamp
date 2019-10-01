import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #111;
  padding: 20px;
`;

export const Products = styled.View`
  background: #fff;
  border-radius: 4px;
`;
export const Product = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BotaoFinalizarText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BotaoFinalizar = styled(RectButton)`
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px;
  margin: 10px;
  align-items: center;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;
export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #666;
`;
export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;
export const ProductImage = styled.Image`
  width: 70px;
  height: 70px;
  background: #eee;
`;
export const ProductActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #ddd;
  margin: 0 10px 20px;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
`;
export const ItemQuantity = styled.Text`
  border: 1px solid #666;
  border-radius: 4px;
  color: #333;
  padding: 5px;
  width: 50px;
  background: #fff;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ItemTotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const TotalProducts = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
`;
export const TotalProductsText = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: #ccc;
  font-weight: bold;
`;
export const TotalProductsValue = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;
