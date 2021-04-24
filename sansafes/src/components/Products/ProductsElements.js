import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  /* background-color: pink; */
  margin: auto;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.h2``;

export const TopRecommended = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
`;
export const TopSafes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  /* background-color: green; */
  align-items: center;
`;
export const TopFire = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  align-items: center;
`;
export const TopLogo = styled.img`
  display: flex;
  width: 200px;
`;
export const Products = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TopProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
export const TopProductImage = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid black;
  margin-top: 30px;
`;
export const TopProductDesc = styled.p`
  text-align: center;
  justify-content: center;
`;
export const Product = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid black;
  margin: 20px;
`;
export const ProductsLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
