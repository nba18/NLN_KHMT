import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="">
            <div className="text-lg font-bold">Đăng nhập</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-lg flex mt-2">Tài khoản<div className="text-red-500">*</div></div>
                <div><TextField variant="outlined" {...register("taikhoan")} className="w-72" /></div>
                <div className="text-lg flex mt-4">Mật khẩu<div className="text-red-500">*</div></div>
                <div><TextField type="password" variant="outlined" {...register("matkhau")} className="w-72" /></div>
                <div className="mt-2"><Button variant="contained" type="submit">Đăng nhập</Button></div>
            </form>
        </div>
    );
}

export default Login;