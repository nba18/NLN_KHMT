import React, { useEffect, useState } from "react";
import Bia from "../../assets/images/bia.png";
import { chuyenmucAPI } from "../../services/api";
function Boloc(props) {
    const [chuyemuclist, setChuyenmuclist] = useState([]);
    const sodetaiduocchon = 5
    const data = []
    for (let i = 1; i <= sodetaiduocchon; i++) {
        data.push(i)
    }
    const fetchChuyenmuc = async () => {
        const List = await chuyenmucAPI.laychuyenmuc();
        setChuyenmuclist(List.data);
    };
    useEffect(() => {
        fetchChuyenmuc();
    }, []);
    const sendData = (data) => {
        props.parentCallback(data);
    }
    return (
        <div className="">
            <div className="mb-4 ml-4 border-2">
                <div className="font-semibold bg-[#dbecfe] pl-2">Chuyên mục </div>
                {chuyemuclist?.map((chuyenmuc, index) => {
                    return (
                        <div key={chuyenmuc._id} className="pl-2 border-t-2 cursor-pointer" onClick={sendData(chuyenmuc._id)}>{chuyenmuc.tenchuyenmuc}</div>
                    );
                })}
            </div>
            <div className="mb-4 ml-4 border-2">
                <div className="font-semibold bg-[#dbecfe] pl-2">Năm thực hiện </div>
                {data.map((chuyenmuc, index) => {
                    return (
                        <div key={index} className="pl-2 border-t-2">{2023-index}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default Boloc;