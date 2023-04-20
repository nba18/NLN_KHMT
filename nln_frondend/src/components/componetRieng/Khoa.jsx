import React, { useEffect, useState } from "react";
import { chuyenmucAPI, luanvanAPI, nienkhoaAPI } from "../../services/api";
import Luanvancard from "./cards/luanvanCard";
import Boloc from "../componetChung/boloc";

Khoa.propTypes = {

};
function Khoa(props) {
    const { id, tenkhoa } = props;
    const [luanvanlist, setLuanvanlist] = useState([]);
    const [chuyemuclist, setChuyenmuclist] = useState([]);
    const [nienkhoalist, setNienkhoalist] = useState([]);
    const [chuyenmuc, setChuyenmuc] = useState('');
    const [nam, setNam] = useState('');
    const chonchuyenmuc = (data) => {
        setChuyenmuc(data)
    }
    const chonnam = (data) => {
        setNam(data)
    }
    const fetchNienkhoa = async () => {
        const List = await nienkhoaAPI.laynienkhoa();
        setNienkhoalist(List.data);
    };
    const fetchChuyenmuc = async () => {
        const List = await chuyenmucAPI.laychuyenmuc();
        setChuyenmuclist(List.data);
    };
    useEffect(() => {
        if (chuyenmuc === '' && nam === '') {
            const fetchLuanvan = async () => {
                const temp = await luanvanAPI.layluanvantheokhoa(id)
                setLuanvanlist(temp.data)
            };
            fetchLuanvan();
        } else {
            const data = {
                'id': id,
                'chuyenmuc': chuyenmuc,
                'nam': nam
            }
            if (data.chuyenmuc != '' && data.nam == '') {
                const fetchLuanvan = async () => {
                    const temp = await luanvanAPI.layluanvantheochuyenmuc(data)
                    setLuanvanlist(temp.data)
                };
                fetchLuanvan();
            }else{
                if(data.nam != '' && data.chuyenmuc == ''){
                    const fetchLuanvan = async () => {
                        const temp = await luanvanAPI.layluanvantheonam(data)
                        setLuanvanlist(temp.data)
                    };
                    fetchLuanvan();
                }else{
                    const fetchLuanvan = async () => {
                        const temp = await luanvanAPI.layluanvantheochuyenmucnam(data)
                        setLuanvanlist(temp.data)
                    };
                    fetchLuanvan();
                }
            }

        }
        fetchChuyenmuc();
        fetchNienkhoa();
    }, [nam, chuyenmuc, id]);
    return (
        <div className="mt-2 grid grid-cols-[minmax(900px,_1fr)_300px]">
            <div>
                <div className="text-2xl font-medium">Luận văn Khoa {tenkhoa}</div>
                <div>Luận văn theo chuyên mục: {chuyenmuc} -- Năm thực hiện: -- {nam}</div>
                {luanvanlist?.map(luanvan => {
                    return (
                        <Luanvancard key={luanvan._id} luanvan={luanvan} />
                    );
                })}
            </div>
            <div className="">
                <div className="mb-4 ml-4 border-2">
                    <div className="font-semibold bg-[#dbecfe] pl-2">Chuyên mục </div>
                    {chuyemuclist?.map((chuyenmuc, index) => {
                        return (
                            <div key={chuyenmuc._id} className="pl-2 border-t-2 cursor-pointer " onClick={() => chonchuyenmuc(chuyenmuc._id)}>{chuyenmuc.tenchuyenmuc}</div>
                        );
                    })}
                </div>
                <div className="mb-4 ml-4 border-2">
                    <div className="font-semibold bg-[#dbecfe] pl-2">Năm thực hiện </div>
                    {nienkhoalist.map((nienkhoa, index) => {
                        return (
                            <div key={nienkhoa._id} className="pl-2 border-t-2 cursor-pointer" onClick={() => chonnam(nienkhoa._id)}>{nienkhoa.hocky} - {nienkhoa.nam}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Khoa;