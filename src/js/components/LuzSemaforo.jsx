import React, { useState } from "react";

export const LuzSemaforo = () => {
    const initialLights = [
        { id: 'luz1', color: 'red' },
        { id: 'luz2', color: 'orange' },
        { id: 'luz3', color: 'green' },
    ];

    const [luces, setLuces] = useState(initialLights);
    const [resplandor, setResplandor] = useState("");

    const handleClick = (lightColor) => {
        setResplandor(lightColor);
    };

    const handleClickAddLight = () => {
        let light4 = { id: "light4", color: 'purple' };
        const alreadyExists = luces.find(el => el.id === light4.id);
        if (!alreadyExists) {
            setLuces(prevLuces => [...prevLuces, light4]);
        }
    };

    const handleClickChangeShadow = () => {
        const colorDisponible = luces.filter(el => el.color !== resplandor);
        const resplandorSeleccionado = colorDisponible[Math.floor(Math.random() * colorDisponible.length)].color;
        setResplandor(resplandorSeleccionado);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 traficdown d-flex flex-row justify-content-center align-items-center">
                <div className="d-flex justify-content-center w-100 justify-content-around">
                    {luces.map((el) => (
                        <div
                            key={el.id}
                            onClick={() => handleClick(el.color)}
                            className={`p-3 mx-4 luzsemaforo ${resplandor === el.color ? 'resplandor' : ''}`}
                            style={{ backgroundColor: el.color }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <button className="m-4" onClick={handleClickAddLight}>Agregar Luz Morada</button>
                <button className="m-4" onClick={handleClickChangeShadow}>Cambiar resplandor</button>
            </div>
        </div>
    );
};