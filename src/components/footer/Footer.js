import React from "react";
import FooterAccordion from "./FooterAccordion";
import { Divider } from "@mui/material";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
  FaTiktok,
} from "react-icons/fa";
import GreenButton from "components/main/GreenButton";

const Footer = () => {
  const initialData = [
    {
      Title: "Hakkımızda",
      SubTitles: [
        { Title: "Tarihçe", Link: "/" },
        { Title: "Şirketimiz", Link: "/" },
        { Title: "Mağazalarımız", Link: "/" },
      ],
      PanelName: "panel1",
    },
    {
      Title: "Kahve",
      SubTitles: [
        { Title: "Starbucks Reserve", Link: "/" },
        { Title: "Kahve Tedariği & Kavurma & Harmanlama", Link: "/" },
        { Title: "Kavurma Profiline Göre Kahveler", Link: "/" },
        { Title: "Nasıl Mükemmel Kahve Hazırlanır", Link: "/" },
        { Title: "Kahve SSS", Link: "/" },
      ],
      PanelName: "panel2",
    },
    {
      Title: "Sosyal Sorumluluk",
      SubTitles: [
        { Title: "Etik ticaret", Link: "/" },
        { Title: "Topluma katkı", Link: "/" },
        { Title: "Çevre", Link: "/" },
        { Title: "Çeşitlilik", Link: "/" },
        { Title: "Sürdürülebilirlik", Link: "/" },
      ],
      PanelName: "panel3",
    },
    {
      Title: "Starbucks Delivers",
      SubTitles: [
        { Title: "Yemeksepeti", Link: "/" },
        { Title: "Getir", Link: "/" },
      ],
      PanelName: "panel4",
    },
  ];
  return (
    <div className="bg-white flex flex-col gap-y-4 w-full px-6 py-4">
      {initialData.map((item, index) => (
        <FooterAccordion
          Title={item?.Title}
          SubItems={item?.SubTitles}
          PanelName={item?.PanelName}
        ></FooterAccordion>
      ))}
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-row items-start justify-start gap-x-4 px-4">
          <FaFacebook size={25}></FaFacebook>
          <FaInstagramSquare size={25}></FaInstagramSquare>
          <FaYoutube size={25}></FaYoutube>
          <FaTwitterSquare size={25}></FaTwitterSquare>
          <FaTiktok size={25}></FaTiktok>
        </div>
        <div className="flex flex-col gap-6 text-md font-bold px-4">
          <span>Kişisel Veri Aydınlatma Metni</span>
          <span>Kullanım Koşulları</span>
          <span>Çerez Tercihleri</span>
          <span>Besin Değerleri Tablosu</span>
          <span>Gift Card</span>
          <span>Bize Ulaşın</span>
        </div>
        <div className="flex flex-row items-start justify-start px-4">
          <GreenButton title="English" reverseCss={true}></GreenButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
