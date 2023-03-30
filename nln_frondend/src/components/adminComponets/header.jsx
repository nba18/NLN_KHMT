import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="mt-1">
            <div className="text-2xl font-bold py-3 pl-2 bg-blue-300">QUẢN LÝ HỆ THỐNG</div>
            <div className="flex mt-1">
                <Link to="/admin/themnienkhoa" className="self-center ">
                    <div className=" mr-2"><Button variant="contained" type="submit">Thêm niên khóa</Button></div>
                </Link>
                <Link to="/admin/themchuyenmuccackhoa" className="self-center ">
                    <div className=" mr-2"><Button variant="contained" type="submit">Thêm chuyên mục và khoa</Button></div>
                </Link>
                <Link to="/admin/themluanvan" className="self-center ">
                    <div className=" mr-2"><Button variant="contained" type="submit">Thêm luận văn</Button></div>
                </Link>
                <Link to="/admin/nienkhoa" className="self-center ">
                    <div className=" mr-2"><Button variant="contained" type="submit">Quản lý niên khóa</Button></div>
                </Link>
                <Link to="/admin/chuyenmuccackhoa" className="self-center ">
                    <div className=" mr-2"><Button variant="contained" type="submit">Quản lý chuyên mục và các khoa</Button></div>
                </Link>
                <Link to="/admin/luanvan" className="self-center ">
                    <div className=" mr-2"><Button variant="contained" type="submit">Quản lý luận văn</Button></div>
                </Link>
            </div>
        </div>
    );
}

export default Header;