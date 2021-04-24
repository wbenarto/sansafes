import styled from "styled-components";

export const AffiliatedContainer = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  /* background-color: pink; */
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const CompanyList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  > img {
    padding: 0 20px;
  }
`;
