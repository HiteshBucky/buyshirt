import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {


  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    

    <div className=" thumb rounded border border-success p-2">
        <a href={imageurl} className="fancybox" rel="ligthbox">
            <img  src={imageurl} className="zoom img-fluid " />
           
        </a>
    </div>

  );
};

export default ImageHelper;
