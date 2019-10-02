import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View`
  background: #fff;
  border-radius: 4px;
`;
export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #666;
`;
export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  background: #eee;
`;
export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;
export const ItemQuantity = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ItemTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const TotalProducts = styled.View`
  margin-top: 30px;
`;
export const TotalProductsText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TotalProductsValue = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const BotaoFinalizarText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const BotaoFinalizar = styled(RectButton)`
  background: #7159c1;
  padding: 12px;
  border-radius: 4px;
`;
export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
