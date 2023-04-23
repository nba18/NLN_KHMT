import React, { useEffect, useState } from "react";
import LogoCTU from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from "react-icons/ai";
import { khoaAPI } from "../../services/api";

function Headerandnav() {
    const [isonClick, setisonClick] = useState(false);
    const [isonClick1, setisonClick1] = useState(false);
    const [khoalist, setKhoalist] = useState([]);
    const fetchKhoa = async () => {
        const List = await khoaAPI.laykhoa();
        setKhoalist(List.data);
    };
    useEffect(() => {
        fetchKhoa();
    },);
    const logout = async () => {
        window.location.reload()
        localStorage.clear()
    }
    return (
        <div className="relative">
            <div className="flex bg-[#93ccfd] h-32 pl-5">
                <img src={LogoCTU} alt="error" className="w-20 my-auto" />
                <div className="self-center ml-2 text-[#1e428a]">
                    <div className="text-2xl font-bold">HỆ THỐNG GIỚI THIỆU LUẬN VĂN</div>
                    <div className="text-xl">Trường CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</div>
                </div>
            </div>
            <div className="flex bg-[#bfdffe] mt-0.5 pl-3 h-10 text-[#1f4aae]">
                <Link to="/" className="mr-6 self-center ">
                    <div className="text-base font-bold hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1">TRANG CHỦ</div>
                </Link >
                <div className="flex text-base mr-6 font-bold self-center cursor-pointer hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1" onClick={() => { isonClick !== true ? setisonClick(true) : setisonClick(false) }}>CÁC KHOA<AiFillCaretDown className="self-center" /></div>
                <Link to="/gioithieu" className="mr-6 self-center">
                    <div className="text-base font-bold hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1">GIỚI THIỆU</div>
                </Link>
                <Link to='/timkiem' className="mr-6 self-center">
                    <div className="text-base font-bold  hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1">TÌM KIẾM NÂNG CAO</div>
                </Link>
                {localStorage.getItem('id') && <div className="flex text-base mr-6 font-bold self-center cursor-pointer hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1" onClick={() => { isonClick1 !== true ? setisonClick1(true) : setisonClick1(false) }}>{localStorage.getItem('email')}<AiFillCaretDown className="self-center" /></div>}
                {!localStorage.getItem('id') && <Link to="/login" className="mr-6 self-center">
                    <div className="text-base font-bold  hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1">ĐĂNG NHẬP</div>
                </Link>}
                {!localStorage.getItem('id') && <Link to="/register" className="mr-6 self-center">
                    <div className="text-base font-bold hover:bg-[#2570eb] hover:text-white h-8 rounded-lg p-1">ĐĂNG KÝ</div>
                </Link>}
            </div>
            {isonClick ? <div className="absolute top-[170px] z-10 bg-white shadow-2xl left-[140px] border">
                {khoalist.map((khoa) => {
                    return (
                        <div key={khoa._id} className="font-bold text-sm my-3 mx-2 py-1 rounded-md hover:bg-[#93ccfd] cursor-pointer"><Link to="/khoa" state={{ id: khoa._id, tenkhoa: khoa.tenkhoa }} onClick={() => { isonClick !== true ? setisonClick(true) : setisonClick(false) }}>{khoa.tenkhoa}</Link></div>
                    );
                })}

            </div> : <></>}

            {isonClick1 ? <div className="absolute top-[170px] z-10 bg-white shadow-2xl left-[580px] border">
                <div className="font-bold text-sm my-3 mx-2 py-1 rounded-md hover:bg-[#93ccfd] cursor-pointer">Hồ sơ cá nhân</div>
                <Link to='/user/dsyeuthich'><div className="font-bold text-sm my-3 mx-2 py-1 rounded-md hover:bg-[#93ccfd] cursor-pointer">Luận văn yêu thích</div></Link>
                {localStorage.getItem('phanloai') === 2 && <Link to='/admin'><div className="font-bold text-sm my-3 mx-2 py-1 rounded-md hover:bg-[#93ccfd] cursor-pointer">Quản lý hệ thống</div></Link>}
                <div className="font-bold text-sm my-3 mx-2 py-1 rounded-md hover:bg-[#93ccfd] cursor-pointer" onClick={logout}>Đăng xuất</div>
            </div> : <></>}

        </div>
    );
}

export default Headerandnav;