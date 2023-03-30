import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nienkhoaAPI } from "../../services/api";
import { useSnackbar } from 'notistack';
function Themnienkhoa() {
    const { register, handleSubmit } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const [hocky, setHocky] = useState('');
    const handleChange = event => {
        setHocky(event.target.value)
    };
    const onSubmit = async (data) => {
        data.hocky = hocky
        const temp = await nienkhoaAPI.themnienkhoa(data)
        temp.data.thatbai ? enqueueSnackbar(temp.data.thatbai, { variant: 'error' }) :
            enqueueSnackbar(temp.data.thanhcong, { variant: 'success' })
    }
    return (
        <div className="mt-4">
            <div className="bg-sky-200 w-[500px] text-center m-auto rounded border-2">Thêm niên khóa</div>
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-2">
                    <TextField {...register('nam')}
                        name="nam"
                        label="Năm niên khóa"
                        type="number"
                        style={{ width: "300px" }}
                    />
                </div>
                <div className="">
                    <Box sx={{ minWidth: 120 }} className="w-[300px] m-auto mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Học kỳ</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={hocky}
                                label="Học kỳ"
                                onChange={handleChange}
                            >
                                <MenuItem value={`Học kỳ 1`}>Học kỳ 1</MenuItem>
                                <MenuItem value={`Học kỳ 2`}>Học kỳ 2</MenuItem>
                                <MenuItem value={`Học kỳ hè`}>Học kỳ hè</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="pt-5"><Button type='submit' variant="contained" >Thêm</Button></div>
            </form>
        </div>
    );
}

export default Themnienkhoa;