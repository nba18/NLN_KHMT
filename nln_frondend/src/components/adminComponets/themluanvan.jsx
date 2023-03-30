import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { chuyenmucAPI, khoaAPI, luanvanAPI, nienkhoaAPI } from "../../services/api";

function Themluanvan() {
    const { register, handleSubmit } = useForm();
    const [chuyenmuc, setChuyenmuc] = useState('');
    const [nienkhoa, setNienkhoa] = useState('');
    const [khoa, setKhoa] = useState('');
    const [chuyenmuclist, setChuyenmuclist] = useState([]);
    const [nienkhoalist, setNienkhoalist] = useState([]);
    const [khoalist, setKhoalist] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    //-------------------------------------------------------------------------------//
    const fetchChuyenmuc = async () => {
        const List = await chuyenmucAPI.laychuyenmuc();
        setChuyenmuclist(List.data);
    };

    const fetchNienkhoa = async () => {
        const List = await nienkhoaAPI.laynienkhoa();
        setNienkhoalist(List.data);
    };
    const fetchKhoa = async () => {
        const List = await khoaAPI.laykhoa();
        setKhoalist(List.data);
    };
    useEffect(() => {
        fetchChuyenmuc();
        fetchNienkhoa();
        fetchKhoa();
    }, []);

    //-------------------------------------------------------------------------------//
    const handleChangeChuyenmuc = event => {
        setChuyenmuc(event.target.value)
    };
    const handleChangeNienkhoa = event => {
        setNienkhoa(event.target.value)
    };
    const handleChangeKhoa = event => {
        setKhoa(event.target.value)
    };
    const onSubmit = async (data) => {
        data.chuyenmuc = chuyenmuc
        data.nienkhoa = nienkhoa
        data.khoa = khoa
        data.file = data.file[0];
        const form = new FormData();
        for (let key of Object.keys(data)) {
            form.append(key, data[key]);
        }
        const temp = await luanvanAPI.themluanvan(form)
        temp.data.thanhcong ? enqueueSnackbar(temp.data.thanhcong, { variant: 'success' }) :
            enqueueSnackbar("Thêm thất bại", { variant: 'error' })
    }
    return (
        <div className="mt-4">
            <div className="bg-sky-200 w-[500px] text-center m-auto rounded border-2">Thêm luận văn</div>
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <Box sx={{ minWidth: 120 }} className="w-[700px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Khoa</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={khoa}
                                label="Khoa"
                                onChange={handleChangeKhoa}
                            >
                                {khoalist?.map(khoa => {
                                    return (
                                        <MenuItem key={khoa._id} value={khoa._id}>{khoa.tenkhoa}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="">
                    <Box sx={{ minWidth: 120 }} className="w-[700px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Niên khóa</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={nienkhoa}
                                label="Niên khóa"
                                onChange={handleChangeNienkhoa}
                            >
                                {nienkhoalist?.map(nienkhoa => {
                                    return (
                                        <MenuItem key={nienkhoa._id} value={nienkhoa._id}>{nienkhoa.nam} - {nienkhoa.hocky}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="">
                    <Box sx={{ minWidth: 120 }} className="w-[700px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Chuyên mục</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={chuyenmuc}
                                label="Chuyên mục"
                                onChange={handleChangeChuyenmuc}
                            >
                                {chuyenmuclist?.map(chuyenmuc => {
                                    return (
                                        <MenuItem key={chuyenmuc._id} value={chuyenmuc._id}>{chuyenmuc.tenchuyenmuc}</MenuItem>
                                    );
                                })}
                                <Link to="/admin/themchuyenmuccackhoa"><div className="pl-4">Thêm chuyên mục mới...</div></Link>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="pt-2">
                    <TextField {...register('tenluanvan')}
                        name="tenluanvan"
                        label="Tên luận văn"
                        type="text"
                        style={{ width: "700px" }}
                    />
                </div>
                <div className="pt-2">
                    <TextField {...register('nguoithuchien')}
                        name="nguoithuchien"
                        label="Người thực hiện"
                        type="text"
                        style={{ width: "700px" }}
                    />
                </div>
                <div className="pt-2">
                    <TextField {...register('tomtat')}
                        name="tomtat"
                        label="Tóm tắt"
                        type="text"
                        multiline
                        rows={10}
                        style={{ width: "700px" }}
                    />
                </div>

                <div className="pt-2">
                    <TextField  {...register('file')}
                        name="file"
                        label=""
                        type="file"
                        style={{ width: "700px" }}
                    />
                </div>

                <div className="pt-5"><Button type='submit' variant="contained" >Thêm</Button></div>
            </form>
        </div>
    );
}

export default Themluanvan;