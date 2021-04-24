import React from "react";
import { AffiliatedContainer, CompanyList } from "./AffliatedElements";
import { SectionHeader, TopLogo } from "../Products/ProductsElements";
import fire from "../../images/fire.png";

const index = () => {
  return (
    <>
      <AffiliatedContainer>
        <SectionHeader>
          Perusahaan yang sudah mengikuti training kami
        </SectionHeader>
        <CompanyList>
          <TopLogo src={fire} />
          <TopLogo src={fire} />
          <TopLogo src={fire} />
          <TopLogo src={fire} />
        </CompanyList>
      </AffiliatedContainer>
    </>
  );
};

export default index;
