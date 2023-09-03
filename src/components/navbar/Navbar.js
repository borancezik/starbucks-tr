import React from "react";
import { MdLocationOn } from "react-icons/md";
import GreenButton from "../main/GreenButton";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex flex-row shadow-md fixed top-0 bg-white">
      <div className="flex items-center justify-end px-4 h-full w-[6%]">
        <img
          className="w-12 h-12"
          src={process.env.PUBLIC_URL + "/img/logo-3.png"}
        ></img>
      </div>
      <div className="h-full w-[45%] flex flex-row items-center justify-start px-2 gap-x-4 text-[13px] font-bold text-[rgba(0, 0, 0, 0.87)] tracking-widest cursor-pointer">
        <div>STARBUCKS REWARDS</div>
        <div>MENÜ</div>
        <div>KAMPANYALAR</div>
        <div>E-GIFT</div>
        <div>KURUMSAL SATIŞ</div>
      </div>
      <div className="h-full w-[49%] flex flex-row items-center justify-end gap-x-10 pr-16 text-md font-bold">
        <div className="flex items-center justify-center gap-x-4">
          <MdLocationOn size={25} className="cursor-pointer"></MdLocationOn>
          <div className="cursor-pointer">Mağazalarımız</div>
          <GreenButton title="Alışverişe Başla"></GreenButton>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <button className="h-8 px-4 rounded-full text-black border border-black hover:bg-entry-hover">
            Giriş
          </button>
          <button className="h-8 px-4 rounded-full text-white bg-black hover:bg-join-us-hover">
            Hemen Katıl
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
