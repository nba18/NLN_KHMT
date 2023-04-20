import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { userAPI } from "../../services/api";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const temp = await userAPI.login(data)
        temp ? enqueueSnackbar('Đăng nhập thành công', { variant: 'success' }) :
            enqueueSnackbar(temp.data.thatbai, { variant: 'error' })
        localStorage.setItem("email", temp.data.email)
        localStorage.setItem("id", temp.data._id)
        localStorage.setItem("phanloai", temp.data.phanloai)
        navigate('/')
    };
    return (
        <div className="">
            <div className="text-lg font-bold">Đăng nhập</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-lg flex mt-4">Email<div className="text-red-500">*</div></div>
                <div><TextField variant="outlined" {...register("taikhoan")} className="w-72" /></div>
                <div className="text-lg flex mt-4">Mật khẩu<div className="text-red-500">*</div></div>
                <div><TextField type="password" variant="outlined" {...register("matkhau")} className="w-72" /></div>
                <div className="mt-2"><Button variant="contained" type="submit">Đăng nhập</Button></div>
            </form>
        </div>
    );
}

export default Login;