import React from "react";

const CardTest = (props) => {
    return (
        <>
            <div>
                <h1>{props.tipo}</h1>
            </div>
            {/* <div>
                <img src={props.img} alt="img" />
            </div> */}
            <div>
                <h2>{props.precio}</h2>
            </div>
            <div>
                <p>{props.m_2_totales}</p>
                <p>{props.dormitorios}</p>
                <p>{props.banos}</p>
            </div>

        </>
    );
};

export default CardTest;