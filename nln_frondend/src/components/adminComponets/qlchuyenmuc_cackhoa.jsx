import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSnackbar } from "notistack";
import { chuyenmucAPI, khoaAPI } from "../../services/api";
function Qlchuyenmuccackhoa() {
    const [khoalist, setKhoalist] = useState([]);
    const [chuyemuclist, setChuyenmuclist] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const fetchKhoa = async () => {
        const List = await khoaAPI.laykhoa();
        setKhoalist(List.data);
    };
    const fetchChuyenmuc = async () => {
        const List = await chuyenmucAPI.laychuyenmuc();
        setChuyenmuclist(List.data);
    };
    const xoaKhoa = async (data) => {
        const temp = await khoaAPI.xoakhoa({'id':data})
        temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
            enqueueSnackbar("Thêm thất bại", { variant: 'error' })
        fetchKhoa();
    };
    const xoaChuyenmuc = async (data) => {
        const temp = await chuyenmucAPI.xoachuyenmuc({'id':data})
        temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
            enqueueSnackbar("Thêm thất bại", { variant: 'error' })
        fetchChuyenmuc();
    };
    useEffect(() => {
        fetchKhoa();
        fetchChuyenmuc();
    }, []);
    return (
        <div className="mt-2">
            <div className="text-center font-semibold text-xl">QUẢN LÝ CÁC KHOA</div>
            <table className="table-fixed m-auto w-[700px]">
                <thead>
                    <tr>
                        <th className="w-[30px]">STT</th>
                        <th className="w-[200px]">TÊN KHOA</th>
                        <th className="w-[100px]">XÓA</th>
                    </tr>
                </thead>
                <tbody>
                    {khoalist.map((khoa,index)  => {
                        return (
                            <tr className="text-center" key={khoa._id}>
                                <td >{index+1}</td>
                                <td>{khoa.tenkhoa}</td>
                                <td><AiOutlineDelete className="m-auto cursor-pointer text-red-500" onClick={() => xoaKhoa(khoa._id)}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="text-center font-semibold mt-10 text-xl">QUẢN LÝ CÁC CHUYÊN MỤC</div>
            <table className="table-fixed m-auto w-[700px]">
                <thead>
                    <tr>
                        <th className="w-[30px]">STT</th>
                        <th className="w-[200px]">TÊN KHOA</th>
                        <th className="w-[100px]">XÓA</th>
                    </tr>
                </thead>
                <tbody>
                    {chuyemuclist.map((chuyenmuc,index)  => {
                        return (
                            <tr className="text-center" key={chuyenmuc._id}>
                                <td >{index+1}</td>
                                <td>{chuyenmuc.tenchuyenmuc}</td>
                                <td><AiOutlineDelete className="m-auto cursor-pointer text-red-500" onClick={() => xoaChuyenmuc(chuyenmuc._id)}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Qlchuyenmuccackhoa;