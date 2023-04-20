import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


Luanvancard.propTypes = {

};
function Luanvancard(props) {
    const { luanvan } = props
    return (
        <div className="mt-3">
            <Link to={`/luanvan/${luanvan._id}`}><div className="text-[#1f4aae]">{luanvan.tenluanvan}</div></Link>
            <div>Người thực hiện: {luanvan.nguoithuchien}</div>
        </div>
    );
}

export default Luanvancard;