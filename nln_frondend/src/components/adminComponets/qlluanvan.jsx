import React, { useEffect, useState } from "react";
import { luanvanAPI, nienkhoaAPI } from "../../services/api";
import { AiOutlineDelete } from "react-icons/ai";
import { useSnackbar } from "notistack";
function Qlluanvan() {
    const [luanvanlist, setLuanvanlist] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const fetchLuanvan = async () => {
        const List = await luanvanAPI.layluanvan();
        setLuanvanlist(List.data);
    };
    const xoa = async (data) => {
        const temp = await luanvanAPI.xoaluanvan({'id':data})
        temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
            enqueueSnackbar("Thêm thất bại", { variant: 'error' })
        fetchLuanvan();
    };
    useEffect(() => {
        fetchLuanvan();
    }, []);
    return (
        <div className="mt-2">
            <table className="table-fixed m-auto ">
                <thead>
                    <tr>
                        <th className="w-[30px]">STT</th>
                        <th className="w-[600px]">TÊN LUẬN VĂN</th>
                        <th className="w-[150px]">HỌC KỲ</th>
                        <th className="w-[150px]">CHUYÊN MỤC</th>
                        <th className="w-[200px]">NGƯỜI THỰC HIỆN</th>
                        <th className="w-[100px]">XÓA</th>
                    </tr>
                </thead>
                <tbody>
                    {luanvanlist.map((luanvan,index)  => {
                        return (
                            <tr className="text-center" key={luanvan._id}>
                                <td >{index+1}</td>
                                <td className="text-left pl-1">{luanvan.tenluanvan}</td>
                                <td>{luanvan?.nienkhoa?.hocky}-{luanvan?.nienkhoa?.nam}</td>
                                <td>{luanvan?.chuyenmuc?.tenchuyenmuc}</td>
                                <td>{luanvan.nguoithuchien}</td>
                                <td><AiOutlineDelete className="m-auto cursor-pointer text-red-500" onClick={() => xoa(luanvan._id)}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Qlluanvan;