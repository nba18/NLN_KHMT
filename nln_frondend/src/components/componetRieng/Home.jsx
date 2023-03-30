import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { luanvanAPI } from "../../services/api";
import Luanvancard from "./cards/luanvanCard";

function Home() {
    const [luanvanlist, setLuanvanlist] = useState([]);


    const fetchLuanvan = async () => {
        const List = await luanvanAPI.layluanvan();
        setLuanvanlist(List.data);
        console.log(List)
    };
    useEffect(() => {
        fetchLuanvan();
    }, []);


    return (
        <div className="mt-4">
            <div className="pl-2 bg-slate-200">Luận văn mới nhất - 2023</div>
            {luanvanlist?.map(luanvan => {
                return (
                    <Luanvancard key={luanvan._id} luanvan = {luanvan} />
                );
            })}
        </div>
    );
}

export default Home;