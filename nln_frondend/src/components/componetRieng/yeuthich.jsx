import React, { useEffect, useState } from "react";
import { userAPI } from "../../services/api";
import Luanvancard from "./cards/luanvanCard";

function Yeuthich() {
    const [luanvanlist, setLuanvanlist] = useState([]);
    const fetchLuanvan = async () => {
        if (localStorage.getItem('id')) {
            const List = await userAPI.laydsyeuthich(localStorage.getItem('id'));
            setLuanvanlist(List.data);
        }
    };
    useEffect(() => {
        fetchLuanvan();
    }, []);
    return (
        <div className="mt-2 ">
            <div className="text-2xl font-medium">Danh sách luận văn yêu thích</div>
            {luanvanlist?.map(luanvan => {
                return (
                    <Luanvancard key={luanvan._id} luanvan={luanvan} />
                );
            })}
        </div>
    );
}

export default Yeuthich;