import React from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Timkiem from "../components/componetRieng/timkiem";
function Timkiempage() {
  return (
    <div className="w-10/12 m-auto h-screen">
      <Headerandnav />
      <div className="">
        <Timkiem />
      </div>
      <Footer />
    </div>
  );
}

export default Timkiempage; 