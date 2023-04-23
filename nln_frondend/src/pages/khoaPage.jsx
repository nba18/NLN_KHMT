import React from "react";
import { useLocation } from "react-router-dom";
import Headerandnav from "../components/componetChung/headerAndnav";
import Footer from "../components/componetChung/footer";
import Khoa from "../components/componetRieng/Khoa";


function Khoapage() {
    const location = useLocation();
    const { id, tenkhoa } = location.state;
    return (
        <div className="w-10/12 m-auto h-auto">
            <Headerandnav />
            <div className="">
                <Khoa tenkhoa={tenkhoa} id={id} />
            </div>
            <Footer />
        </div>
    );
}

export default Khoapage;