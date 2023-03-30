import React from "react";
import Boloc from "../components/componetChung/boloc";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Home from "../components/componetRieng/Home";

function Homepage(){
    return(
        <div className="w-10/12 m-auto h-auto">
            <Headerandnav />
            <div className="grid grid-cols-[minmax(900px,_1fr)_300px]">
                <Home />
                <Boloc />
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;