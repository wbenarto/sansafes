import React from "react";
import {
  ProductsContainer,
  SectionHeader,
  TopRecommended,
  TopSafes,
  TopFire,
  TopLogo,
  Products,
  Product,
  TopProduct,
  TopProductDesc,
  TopProductImage,
  ProductsLists,
} from "./ProductsElements";

import sansafes from "../../images/safes.jpg";
import sanfire from "../../images/fire.png";
import safe from "../../images/safe1.png";
import arsip from "../../images/monroe.png";
import fe from "../../images/fe.png";
import hp from "../../images/hp.png";

const index = () => {
  return (
    <>
      <ProductsContainer>
        <SectionHeader>Produk Yang Kami Rekomendasikan</SectionHeader>
        <TopRecommended>
          <TopSafes>
            <TopLogo src={sansafes}></TopLogo>
            <Products>
              <TopProduct>
                <TopProductImage src={safe}></TopProductImage>
                <TopProductDesc>Brankas</TopProductDesc>
              </TopProduct>
              <TopProduct>
                <TopProductImage src={arsip}></TopProductImage>
                <TopProductDesc>
                  Lemari <br />
                  Arsip
                </TopProductDesc>
              </TopProduct>
            </Products>
          </TopSafes>
          <TopFire>
            <TopLogo src={sanfire}></TopLogo>
            <Products>
              <TopProduct>
                <TopProductImage src={fe}></TopProductImage>
                <TopProductDesc>Alat Pemadam</TopProductDesc>
              </TopProduct>
              <TopProduct>
                <TopProductImage src={hp}></TopProductImage>
                <TopProductDesc>
                  Pemadam <br /> Kebakaran
                </TopProductDesc>
              </TopProduct>
            </Products>
          </TopFire>
        </TopRecommended>

        <ProductsLists>
          <SectionHeader>Alat Keselamatan</SectionHeader>
          <Products>
            <Product>1</Product>
            <Product>2</Product>
            <Product>3</Product>
            <Product>4</Product>
          </Products>
        </ProductsLists>
        <ProductsLists>
          <SectionHeader>Alat Kesehatan</SectionHeader>
          <Products>
            <Product>1</Product>
            <Product>2</Product>
            <Product>3</Product>
            <Product>4</Product>
          </Products>
        </ProductsLists>
      </ProductsContainer>
    </>
  );
};

export default index;
