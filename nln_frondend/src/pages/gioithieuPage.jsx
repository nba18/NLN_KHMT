import React from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Home from "../components/componetRieng/home";
import Bia from "../assets/images/bia.png";
import Gioithieu from "../components/componetRieng/gioitieu";

function Gioithieupage(){
    return(
        <div className="w-10/12 m-auto h-auto">
            <Headerandnav />
            <div className="">
                <Gioithieu />
            </div>
            <Footer />
        </div>
    );
}

export default Gioithieupage;