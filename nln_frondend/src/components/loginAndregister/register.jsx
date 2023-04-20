import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { userAPI } from "../../services/api";

function Register() {
    const { register, handleSubmit } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const onSubmit = async (data) => {
        console.log(data)
        const temp = await userAPI.register(data)
        temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
            enqueueSnackbar(temp.data.thatbai, { variant: 'error' })
    };
    return (
        <div className="">
            <div className="text-lg font-bold">Đăng ký tài khoản</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-lg flex mt-4">Họ tên<div className="text-red-500">*</div></div>
                <div><TextField variant="outlined" {...register("hoten")} className="w-72" /></div>
                <div className="text-lg flex mt-4">Email<div className="text-red-500">*</div></div>
                <div><TextField variant="outlined" {...register("email")} className="w-72" /></div>
                <div className="text-lg flex mt-4">Mật khẩu<div className="text-red-500">*</div></div>
                <div><TextField type="password" variant="outlined" {...register("matkhau")} className="w-72" /></div>
                <div className="mt-2"><Button variant="contained" type="submit">Đăng ký</Button></div>
            </form>
        </div>
    );
}

export default Register;