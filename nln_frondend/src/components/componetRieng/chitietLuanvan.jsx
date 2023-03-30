import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

import { luanvanAPI } from "../../services/api";


function Chitietluanvan() {
    const match = useMatch('/luanvan/:id');
    const [luanvan, setLuanvan] = useState([]);
    const fetchLuanvan = async () => {
        const List = await luanvanAPI.lay1luanvan(match.params.id);
        setLuanvan(List.data);
    };
    useEffect(() => {
        fetchLuanvan();
    }, []);


    return (
        <div className="mt-4">
            <div className="text-2xl font-semibold">{luanvan.tenluanvan}</div>
            <div className="mt-2">Người thực hiện: {luanvan.nguoithuchien}</div>
            <div className="mt-2">Full text:</div>
            <div className="mt-2 grid grid-cols-[minmax(700px,_1fr)_300px]">
                <div>
                    <div className="text-lg font-semibold">Giới thiệu</div>
                    <div>{luanvan.tomtat}</div>
                </div>
                <div>
                    <div className="mb-4 ml-4 border-2 h-14">
                        <div className="font-semibold bg-slate-200 pl-2">Chuyên mục </div>
                        <div className="pl-2">{luanvan.chuyenmuc?.tenchuyenmuc}</div>
                    </div>
                    <div className="mb-4 ml-4 border-2 h-14">
                        <div className="font-semibold bg-slate-200 pl-2">Khoa </div>
                        <div className="pl-2">{luanvan?.khoa?.tenkhoa}</div>
                    </div>
                    <div className="mb-4 ml-4 border-2 h-14">
                        <div className="font-semibold bg-slate-200 pl-2">Năm thực hiện </div>
                        <div className="pl-2">{luanvan.nienkhoa?.nam}</div>
                    </div>

                </div>
            </div>

            <div>Các luận văn liên quan</div>            
        </div>
    );
}

export default Chitietluanvan;