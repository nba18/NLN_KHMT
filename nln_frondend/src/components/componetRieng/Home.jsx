import React, { useEffect, useState } from "react";
import { luanvanAPI } from "../../services/api";
import Luanvancard from "./cards/luanvanCard";

function Home() {
    const [luanvanlist, setLuanvanlist] = useState([]);
    const fetchLuanvan = async () => {
        const List = await luanvanAPI.layluanvan();
        setLuanvanlist(List.data);
    };
    useEffect(() => {
        fetchLuanvan(); 
    }, []);
    return (
        <div className="mt-2 ">
            <div className="text-2xl font-medium">Luận văn Trường công nghệ thông tinh và truyền thông</div>
            <div className="bg-[#dbecfe] mt-2 pl-2 h-9 py-1">Luận văn mới nhất - {new Date().getFullYear()}</div>
            {luanvanlist?.map(luanvan => {
                return (
                    <Luanvancard key={luanvan._id} luanvan = {luanvan} />
                );
            })}
        </div>
    );
}

export default Home;