import { Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { chuyenmucAPI, khoaAPI } from "../../services/api";

function Themchuyenmuc_cackhoa() {
    const { register, handleSubmit } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async (data) => {
        const temp = await chuyenmucAPI.themchuyenmuc(data)
        temp.data.thatbai ? enqueueSnackbar(temp.data.thatbai, { variant: 'error' }) :
            enqueueSnackbar(temp.data.thanhcong, { variant: 'success' })
    }

    const onSubmit1 = async (data1) => {
        const temp = await khoaAPI.themkhoa(data1)
        temp.data.thatbai ? enqueueSnackbar(temp.data.thatbai, { variant: 'error' }) :
            enqueueSnackbar(temp.data.thanhcong, { variant: 'success' })
    }
    return (
        <div className="mt-4">
            <div className="bg-sky-200 w-[500px] text-center m-auto rounded border-2">Thêm chuyên mục</div>
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-2">
                    <TextField {...register('tenchuyenmuc')}
                        name="tenchuyenmuc"
                        label="Tên chuyên mục mới"
                        type="text"
                        style={{ width: "300px" }}
                    />
                </div>
                <div className="pt-2"><Button type='submit' variant="contained" >Thêm</Button></div>
            </form>
            <div className="bg-sky-200 w-[500px] text-center m-auto rounded border-2 mt-10">Thêm khoa</div>
            <form className="pt-5 text-center" onSubmit={handleSubmit(onSubmit1)}>
                <div className="pt-2">
                    <TextField {...register('tenkhoa')}
                        name="tenkhoa"
                        label="Tên khoa mới"
                        type="text"
                        style={{ width: "300px" }}
                    />
                </div>
                <div className="pt-2"><Button type='submit' variant="contained" >Thêm</Button></div>
            </form>
        </div>
    );
}

export default Themchuyenmuc_cackhoa;