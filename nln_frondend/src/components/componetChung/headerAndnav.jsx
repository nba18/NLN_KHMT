import React, { useState } from "react";
import LogoCTU from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

function Headerandnav() {
    const [isonClick, setisonClick] = useState(false);
    return (
        <div className="relative">
            <div className="flex bg-[#F0F2F5] h-32 pl-5">
                <img src={LogoCTU} alt="error" className="w-20 my-auto" />
                <div className="self-center ml-2">
                    <div className="text-2xl font-bold">HỆ THỐNG GIỚI THIỆU LUẬN VĂN</div>
                    <div className="text-xl">Trường CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</div>
                </div>
            </div>
            <div className="flex bg-[#F0F2F5] mt-1 pl-3 h-10">
                <Link  to="/" className="mr-6 self-center ">
                    <div className="text-base font-bold ">TRANG CHỦ</div>
                </Link>
                <div className="text-base font-bold mr-6 self-center cursor-pointer" onClick={() => { isonClick != true ? setisonClick(true) : setisonClick(false) }}>CÁC KHOA</div>
                <Link className="mr-6 self-center">
                    <div className="text-base font-bold mr-6 ">GIỚI THIỆU</div>
                </Link>
                <Link className="mr-6 self-center">
                    <div className="text-base font-bold mr-6 ">LIÊN HỆ</div>
                </Link>
                <Link to="/login" className="mr-6 self-center">
                    <div className="text-base font-bold mr-6 ">ĐĂNG NHẬP</div>
                </Link>
                <Link  to="/register" className="mr-6 self-center">
                    <div className="text-base font-bold mr-6 ">ĐĂNG KÝ</div>
                </Link>
            </div>
            {isonClick ? <div className="absolute mt-1 z-10 bg-white shadow-xl left-32 border">
                <div className="font-bold text-sm my-2 mx-2">Khoa học máy tính</div>
                <div className="font-bold text-sm my-2 mx-2">Công nghệ thông tin</div>
                <div className="font-bold text-sm my-2 mx-2">Hệ thống thông tin</div>
                <div className="font-bold text-sm my-2 mx-2">Kỹ thuật phần mềm</div>
                <div className="font-bold text-sm my-2 mx-2">Mạng máy tính và truyền thông dữ liệu</div>
                <div className="font-bold text-sm my-2 mx-2">Truyền thông đa phương tiện</div>
                </div> : <></>}

            <div className="right-10">
                
            </div>
        </div>
    );
}

export default Headerandnav;