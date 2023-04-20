import React, { useEffect, useState } from "react";
import { nienkhoaAPI } from "../../services/api";
import { AiOutlineDelete } from "react-icons/ai";
import { useSnackbar } from "notistack";
function Qlnienkhoa() {
    const { enqueueSnackbar } = useSnackbar();
    const [nienkhoalist, setNienkhoalist] = useState([]);
    const fetchNienkhoa = async () => {
        const List = await nienkhoaAPI.laynienkhoa();
        setNienkhoalist(List.data);
    };
    const xoa = async (data) => {
        const temp = await nienkhoaAPI.xoanienkhoa({'id':data})
        temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
            enqueueSnackbar("Thêm thất bại", { variant: 'error' })
        fetchNienkhoa();
    };
    useEffect(() => {
        fetchNienkhoa();
    }, []);
    return (
        <div className="mt-2">
            <table className="table-fixed m-auto w-[700px]">
                <thead>
                    <tr>
                        <th className="w-[30px]">STT</th>
                        <th className="w-[200px]">NĂM NIÊN KHÓA</th>
                        <th className="w-[100px]">HỌC KỲ</th>
                        <th className="w-[100px]">XÓA</th>
                    </tr>
                </thead>
                <tbody>
                    {nienkhoalist.map((nienkhoa,index)  => {
                        return (
                            <tr className="text-center" key={nienkhoa._id}>
                                <td >{index+1}</td>
                                <td>{nienkhoa.nam}</td>
                                <td>{nienkhoa.hocky}</td>
                                <td><AiOutlineDelete className="m-auto cursor-pointer text-red-500" onClick={() => xoa(nienkhoa._id)}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Qlnienkhoa;