import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 90%;
  height: 520px;
  /* background-color: pink; */
  flex-direction: column;
`;

export const TopMain = styled.div`
  width: 100%;
  justify-content: center;
  padding-top: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
`;

export const MainImages = styled.img`
  height: 300px;
  padding: 20px;
`;

export const BottomMain = styled.div``;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLink = styled(Link)`
  font-size: 24px;
  padding: 10px 40px;
`;

export const MainDesc = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
`;
