import React from "react";
import {
  MainContainer,
  TopMain,
  MainImages,
  BottomMain,
  MainHeader,
  HeaderLink,
  MainDesc,
} from "./MainElements";
import img1 from "../../images/Wendy.jpeg";
import img2 from "../../images/NHN.jpeg";

const MainElements = () => {
  return (
    <>
      <MainContainer>
        <TopMain>
          <MainImages src={img1} />
          <MainImages src={img2} />
        </TopMain>
        <BottomMain>
          <MainHeader>
            <HeaderLink>TENTANG NHN</HeaderLink>
            <HeaderLink>TRAINING AWARENESS</HeaderLink>
          </MainHeader>
          <MainDesc>
            NHN adalah New HSE Networking (NHN), Suatu Komunitas Praktisi K3
            Seluruh Indonesia yang berkomitment untuk selalu mengutamakan
            Kekeluargaan, Silaturahmi dan Saling tolong menolong sesama anggota
            dengan Prinsip Profesional dan Rasional. Dengan memberi peluang
            kepada teman2 yang belum mendapat pekerjaan yang layak dan belum
            bekerja untuk sama2 menikmati kehidupan yang lebih baik.
          </MainDesc>
        </BottomMain>
      </MainContainer>
    </>
  );
};

export default MainElements;
