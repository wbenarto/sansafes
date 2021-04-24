import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  height: 50px;
  /* background-color: teal; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  border: 2px black solid;
`;

export const NavLinks = styled(Link)`
  width: 15em;
  height: 2em;
  font-size: 1.2rem;
  display: flex;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: center;

  /* background-color: purple; */
  @media screen and (max-width: 375px) {
    font-size: 0.5em;
  }

  @media screen and (max-width: 150px) {
    display: none;
  }
`;
