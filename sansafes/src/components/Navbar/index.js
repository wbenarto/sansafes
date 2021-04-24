import React from "react";
import { NavbarContainer, NavLinks } from "./NavbarElements";

const index = () => {
  return (
    <>
      <NavbarContainer>
        <NavLinks>Home</NavLinks>
        <NavLinks>Tentang Kami</NavLinks>
        <NavLinks>Training + Sertifikat</NavLinks>
        <NavLinks>Produk</NavLinks>
        <NavLinks>Kontak Kami</NavLinks>
        <NavLinks>Lowongan Kerja</NavLinks>
      </NavbarContainer>
    </>
  );
};

export default index;
