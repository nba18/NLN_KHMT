import React from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Login from "../components/loginAndregister/login";


function Loginpage(){
    return(
        <div className="w-10/12 m-auto h-full">
            <Headerandnav />
            <div className="grid grid-cols-[minmax(900px,_1fr)_200px]">
                <Login />
            </div>
            <div className="mt-36">
                <Footer />
            </div>
        </div>
    );
}

export default Loginpage;