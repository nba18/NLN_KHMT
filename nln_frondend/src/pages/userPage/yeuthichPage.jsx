import React from "react";
import Headerandnav from "../../components/componetChung/headerAndnav";
import Footer from "../../components/componetChung/footer";
import Yeuthich from "../../components/componetRieng/yeuthich";


function Yeuthichpage() {
    return (
        <div className="w-10/12 m-auto h-auto">
            <Headerandnav />
            <div className="">
                <Yeuthich />
            </div>
            <Footer />
        </div>
    );
}

export default Yeuthichpage;