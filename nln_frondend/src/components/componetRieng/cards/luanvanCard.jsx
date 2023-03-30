import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


Luanvancard.propTypes = {

};
function Luanvancard(props) {
    const { luanvan } = props
    return (
        <div className="mt-4">
            <Link to={`/luanvan/${luanvan._id}`}><div className="text-cyan-600">{luanvan.tenluanvan}</div></Link>
            <div>Người thực hiện: {luanvan.nguoithuchien}</div>
        </div>
    );
}

export default Luanvancard;