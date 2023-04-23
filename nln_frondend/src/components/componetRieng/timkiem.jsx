import { Box, FormControl, IconButton, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { chuyenmucAPI, khoaAPI, nienkhoaAPI } from "../../services/api";
import { useSnackbar } from "notistack";

function Timkiem() {
    const { enqueueSnackbar } = useSnackbar();
    const [chuyenmuc, setChuyenmuc] = useState('');
    const [nienkhoa, setNienkhoa] = useState('');
    const [khoa, setKhoa] = useState('');
    const [luanvan, setLuanvan] = useState('');
    const [chuyenmuclist, setChuyenmuclist] = useState([]);
    const [nienkhoalist, setNienkhoalist] = useState([]);
    const [khoalist, setKhoalist] = useState([]);
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
    const handleChangeChuyenmuc = event => {
        setChuyenmuc(event.target.value)
    };
    const handleChangeNienkhoa = event => {
        setNienkhoa(event.target.value)
    };
    const handleChangeKhoa = event => {
        setKhoa(event.target.value)
    };
    const handleChangeLuanvan = event => {
        setLuanvan(event.target.value)
    }
    const handleSearch = async => {
        const data = {
            'luanvan': luanvan,
            'chuyenmuc': chuyenmuc,
            'khoa': khoa,
            'nienkhoa': nienkhoa
        }
        if (luanvan === '') {
            enqueueSnackbar("Nhập tên luận văn", { variant: 'error' })
        }
        console.log(data)
    }
    return (
        <div className="">
            <div className="mt-5 w-2/3 text-center m-auto">
                <div className="border-2 w-full flex ">
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Tên luận văn . . . ."
                        onChange={handleChangeLuanvan}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                        <AiOutlineSearch />
                    </IconButton>
                </div>
                <div className="text-xl font-bold text-[#1f4aae]">
                    Bộ lọc
                </div>
                <div className="">
                    <Box sx={{ minWidth: 120 }} className="w-[500px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Khoa</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={khoa}
                                label="Khoa"
                                onChange={handleChangeKhoa}
                            >
                                <MenuItem value='all'>Tất cả</MenuItem>
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
                    <Box sx={{ minWidth: 120 }} className="w-[500px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Niên khóa</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={nienkhoa}
                                label="Niên khóa"
                                onChange={handleChangeNienkhoa}
                            >
                                <MenuItem value='all'>Tất cả</MenuItem>
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
                    <Box sx={{ minWidth: 120 }} className="w-[500px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Chuyên mục</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={chuyenmuc}
                                label="Chuyên mục"
                                onChange={handleChangeChuyenmuc}
                            >
                                <MenuItem value='all'>Tất cả</MenuItem>
                                {chuyenmuclist?.map(chuyenmuc => {
                                    return (
                                        <MenuItem key={chuyenmuc._id} value={chuyenmuc._id}>{chuyenmuc.tenchuyenmuc}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>

        </div>
    );
}

export default Timkiem;