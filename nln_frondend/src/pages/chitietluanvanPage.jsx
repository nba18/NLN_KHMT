import React from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Chitietluanvan from "../components/componetRieng/chitietLuanvan";

function Chitietluanvanpage(){
    return(
        <div className="w-10/12 m-auto h-auto">
            <Headerandnav />
            <div className="">
                <Chitietluanvan />
            </div>
            <Footer />
        </div>
    );
}

export default Chitietluanvanpage;