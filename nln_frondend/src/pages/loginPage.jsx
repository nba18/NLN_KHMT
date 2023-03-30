import React from "react";
import Boloc from "../components/componetChung/boloc";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Login from "../components/loginAndregister/login";


function Loginpage(){
    return(
        <div className="w-10/12 m-auto h-screen">
            <Headerandnav />
            <div className="grid grid-cols-[minmax(900px,_1fr)_200px]">
                <Login />
                <Boloc />
            </div>
            <Footer />
        </div>
    );
}

export default Loginpage;