import styled from 'styled-components/native';

export const Container = styled.View`
  background: #111;
`;

export const Produto = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const CartQty = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddToCartButton = styled.View`
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  flex-direction: row;
  align-items: center;
`;

export const CartQtyNum = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const AddToCartButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Produtos = styled.FlatList.attrs({
  horizontal: true,
})``;
