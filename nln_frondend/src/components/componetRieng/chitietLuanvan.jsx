import React, { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";

import { luanvanAPI, userAPI } from "../../services/api";
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { HiFolderAdd } from 'react-icons/hi';
import { useSnackbar } from "notistack";
function Chitietluanvan() {
    const match = useMatch('/luanvan/:id');
    const { enqueueSnackbar } = useSnackbar();
    const [luanvan, setLuanvan] = useState([]);
    const fetchLuanvan = async () => {
        const List = await luanvanAPI.lay1luanvan(match.params.id);
        setLuanvan(List.data);
    };
    useEffect(() => {
        fetchLuanvan();
    },);
    const data = {
        'iduser': localStorage.getItem('id'),
        'idluanvan': luanvan._id
    }
    const themyeuthich = async () => {
        if (localStorage.getItem('id')) {
            const temp = await userAPI.themyeuthich(data)
            temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
                enqueueSnackbar(temp.data.thatbai, { variant: 'error' })
        } else {
            enqueueSnackbar('Bạn cần đăng nhập để thêm vào danh sách yêu thích', { variant: 'error' })
        }

    };
    const path = "https://nln-khmt-server.onrender.com/files/" + luanvan.file?.filename
    return (
        <div className="mt-4">
            <div className="text-2xl font-semibold">{luanvan.tenluanvan}</div>
            <div className="mt-2 flex ">Thêm vào yêu thích:<HiFolderAdd className="mt-1.5 ml-2 text-red-500 cursor-pointer" onClick={themyeuthich} /></div>
            <div className="mt-2">Người thực hiện: {luanvan.nguoithuchien}</div>
            <div className="mt-2 flex">Full text:<a href={path} className="flex text-red-500 cursor-pointer"><BsFileEarmarkPdf className="mt-1 ml-2" /> PDF</a></div>
            <div className="mt-2 grid grid-cols-[minmax(700px,_1fr)_300px]">
                <div>
                    <div className="text-lg font-semibold">Tóm tắt</div>
                    <div>{luanvan.tomtat}</div>
                </div>
                <div>
                    <div className="mb-4 ml-4 border-2 h-14">
                        <div className="font-semibold bg-[#dbecfe] pl-2">Chuyên mục </div>
                        <div className="pl-2">{luanvan.chuyenmuc?.tenchuyenmuc}</div>
                    </div>
                    <div className="mb-4 ml-4 border-2 h-14">
                        <div className="font-semibold bg-[#dbecfe] pl-2">Khoa </div>
                        <div className="pl-2">{luanvan.khoa?.tenkhoa}</div>
                    </div>
                    <div className="mb-4 ml-4 border-2 h-14">
                        <div className="font-semibold bg-[#dbecfe] pl-2">Năm thực hiện </div>
                        <div className="pl-2">{luanvan.nienkhoa?.nam}</div>
                    </div>

                </div>
            </div>

            <div>Các luận văn liên quan</div>
        </div>
    );
}

export default Chitietluanvan;