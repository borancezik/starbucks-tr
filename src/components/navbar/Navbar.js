import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex flex-row bg-red-600">
      <div className="h-full w-[10%] bg-green-500"></div>
      <div className="h-full w-[45%] flex flex-row items-center justify-start gap-x-4 bg-green-300 text-md font-medium">
        <div>STARBUCKS REWARDS</div>
        <div>MENÜ</div>
        <div>KAMPANYALAR</div>
        <div>E-GIFT</div>
        <div>KURUMSAL SATIŞ</div>
      </div>
      <div className="h-full w-[45%] flex flex-row items-center justify-end gap-x-4 pr-16 bg-green-100">
        <div>İCON</div>
        <div>Mağazalarımız</div>
        <div>Alışverişe Başla</div>
        <div>Giriş</div>
        <div>Hemen Katıl</div>
      </div>
    </div>
  );
};

export default Navbar;
