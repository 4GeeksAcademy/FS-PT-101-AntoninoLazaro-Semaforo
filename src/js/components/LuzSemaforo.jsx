import React, { useState } from "react";

export const LuzSemaforo = () => {
    const initialLights = [
        { id: 'luz1', color: 'red' },
        { id: 'luz2', color: 'orange' },
        { id: 'luz3', color: 'green' },
    ];

    const [luces, setLuces] = useState(initialLights);
    const [light, setLight] = useState();

    const handleClick = (lightColor) => {
        setLight(lightColor);
    };

    const handleClickAddLight = () => {
        let light4 = { id: "light4", color: 'purple' };
        const alreadyExists = luces.find(el => el.id === light4.id);
        if (!alreadyExists) {
            setLuces(prevLuces => [...prevLuces, light4]);
        }
    };

    const handleClickChangeShadow = () => {
        const availableColor = luces.filter(el=>el.color!==light);
        const shadow = availableColor[Math.floor(Math.random()*availableColor.length)].color;
        setLight(shadow);
    };
    

    return (
        <div className="text-center">
            <div className="traficdown d-flex flex-row justify-content-center align-items-center">
                <div className="d-flex justify-content-center w-100 justify-content-around">
                    {luces.map((el) => (
                        <div
                            key={el.id}
                            onClick={() => handleClick(el.color)}
                            className={`p-3 mx-4 luzsemaforo ${light === el.color ? 'resplandor' : ''}`}
                            style={{ backgroundColor: el.color }}
                        ></div>
                    ))}
                </div>
            </div>
            <button className="m-4" onClick={handleClickAddLight}>Agregar Luz Morada</button>
            <button className="m-4" onClick={handleClickChangeShadow}>Cambiar resplandor</button>
        </div>
    );
};