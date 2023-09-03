import HomeContent from "components/home/HomeContent";
import GreenButton from "components/main/GreenButton";
import React from "react";

const Home = () => {
  const initialData = [
    {
      title: "Dilediğin Gibi Öde Yıldız Kazan! ⭐",
      detail:
        "Starbucks® Mobil’de yeni dönem başladı! Ödemeni nakit, kredi kartı veya Starbucks® Mobil ile yap, tüm harcamalarında yıldız kazan!",
      buttonTitle: "Detaylı Bilgi",
      img: "/img/home-content.jpg",
    },
    {
      title: "Yaza renk katacak kupa ve termoslar seni bekliyor! 🥳",
      detail:
        "Yazına renk katacak kupa ve termos ailemizin yeni üyeleriyle tanışmaya hazır mısın? 🥳 Çok seveceğin yeni Starbucks® kupa ve termosları Hepsiburada’da seni bekliyor!",
      buttonTitle: "Hepsiburada",
      img: "/img/home-content-1.jpg",
    },
    {
      title: "",
      detail:
        "Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol.",
      buttonTitle: "Detaylı Bilgi",
      img: "/img/home-content-2.jpg",
    },
    {
      title: "Arabaya servis ile ara vermeden yolculuğuna lezzet kat!",
      detail:
        "Aracından inmeden Starbucks® Drive Thru mağazalarımızdan siparişini ver, ara vermeden yolculuğuna lezzet kat! 🚗 Şimdilik sınırlı mağazalarımızda: 📍Şekerpınar 📍Manavgat 📍Balıkesir O204 📍Ankara Vega Cadde Yeni Drive Thru lokasyonlarımız için starbucks.com.tr'yi ziyaret etmeyi ve bizi sosyal medya hesaplarımızdan takip etmeyi unutma!",
      buttonTitle: "Detaylı Bilgi",
      img: "/img/home-content-3.jpg",
    },
    {
      title: "Eşsiz bir deneyim seni bekliyor!",
      detail:
        "Egzotik bölgelerden nadir kahve çekirdeklerini özenle topladık ve Milano Roastry’de ustalıkla kavurduk. Her fincan kahve ayrı bir hikaye demek ve belki de bu hikayenin bir daha tekrarı yok!",
      buttonTitle: "Detaylı Bilgi",
      img: "/img/home-content-4.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-y-12 p-6">
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
            <GreenButton title="YemekSepeti" reverseCss={true}></GreenButton>
          </div>
        </div>
      </div>
      {initialData.map((item, index) => (
        <HomeContent
          key={index}
          title={item?.title}
          detail={item?.detail}
          buttonTitle={item?.buttonTitle}
          img={item?.img}
        ></HomeContent>
      ))}
    </div>
  );
};

export default Home;
