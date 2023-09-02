import GreenButton from "components/main/GreenButton";
import React from "react";

const Home = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-full h-[65%] bg-green-500"
          src={process.env.PUBLIC_URL + "/img/home-banner.jpg"}
        ></img>
        <div className="flex flex-col gap-y-4 w-full h-[35%] py-4 px-8">
          <div className="font-bold text-xl">
            Yaza özel yeni Frappuccino®'larımızla tanış! 🍓🍫🧇
          </div>
          <div>
            Yaz günlerinin yeni favorileri: ister çilekli, ister çikolatalı
            Waffle Cone Frappuccino®! 🌴 Yaza özel iki yeni içeceğimiz ve tüm
            diğer Frappuccino®’larımızın tadını çıkarmak için mağazalarımıza
            gelebilir 🏃🏻‍♂️; Starbucks® Delivers ile dilediğin yere sipariş
            verebilirsin! 🛵
          </div>
          <div className="flex flex-row gap-x-4 items-center justify-start">
            <GreenButton title="Getir Yemek"></GreenButton>
            <GreenButton title="Yemek Sepeti" reverseCss={true}></GreenButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
