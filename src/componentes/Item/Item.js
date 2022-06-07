import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, descripcion}) => {
    return (
        <> <h3>{nombre}</h3>
        <p>{precio}</p>
        <Link to={`/detail/${id}`}>Ver detalle</Link></>
    )
};

export default Item