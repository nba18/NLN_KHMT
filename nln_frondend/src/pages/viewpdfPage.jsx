import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import { useLocation } from "react-router-dom";
import WebViewer from '@pdftron/webviewer';

function Viewpdfpage(){
    const location = useLocation();
    const [instance, setInstance] = useState(null)
    const { file } = location.state;
    const path = "http://localhost:5000/files/" + file
    const viewer = useRef(null);
    useEffect(() => {
        if (instance) {
          instance.loadDocument(path)
        } else {
          WebViewer(
            {
              path: '/webviewer/lib',
              initialDoc: path,
            },
            viewer.current,
          ).then(ins => {
            setInstance(ins)
          })
        }
      }, [path, instance]);
    return(
        <div className="w-10/12 m-auto h-screen">
            <Headerandnav />
            <div className="">
            <div style={{ height: "1000px", width: "1000px", margin: "0 auto", marginTop: "10px" }} className="webviewer" ref={viewer}></div>
            </div>
            <div className="mt-[45px]">
                <Footer />
            </div>
        </div>
    );
}

export default Viewpdfpage;