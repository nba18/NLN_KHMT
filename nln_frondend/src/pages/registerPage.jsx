import React from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Register from "../components/loginAndregister/register";

function Registerpage(){
    return(
        <div className="w-10/12 m-auto h-screen">
            <Headerandnav />
            <div className="grid grid-cols-[minmax(900px,_1fr)_200px]">
                <Register />
            </div>
            <div className="mt-[45px]">
                <Footer />
            </div>
        </div>
    );
}

export default Registerpage;