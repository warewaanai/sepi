import React, { useRef, useEffect } from 'react';
import './stylesheet.scss';

const Background = props => {
    return null;

    const canvasRef = useRef(null);
    const cellSide = 64;
    const cellsX = Math.floor(window.innerWidth / cellSide);
    const cellsY = Math.floor(window.innerHeight / cellSide);

    let digits = [];
    for (let i = 0; i < cellsX; ++i)
        for (let j = 0; j < cellsY; ++j) {
            digits.push({
                px: i * cellSide + Math.random() * cellSide,
                py: j * cellSide + Math.random() * cellSide,
                a1: -0.5 + Math.random(),
                b1: -0.5 + Math.random(),
                val: Math.random() < 0.5 ? '0' : '1'
            });
        }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.font = "16px Courier New, Courier, monospace";

        const frame = () => {
            context.fillStyle = '#fff';
            context.fillRect(0, 0, 10000, 10000);

            context.fillStyle = '#888';
            const d = new Date();
            let t = d.getTime() / 3000;
            
            for (let i = 0; i < digits.length; ++i)
                context.fillText(digits[i].val, digits[i].px + cellSide * Math.sin(digits[i].a1 * t), digits[i].py + cellSide * Math.cos(digits[i].b1 * t));

            
            window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
    });


    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} id="canvasBackground" />;
}

export default Background;
