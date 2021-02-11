import React, { useRef, useEffect, useState } from 'react'
import TermBlink from '../../components/termblink'

import './prezentare.scss'


const tupleToRGB = (tup) => {
    if (tup.length === 3)
        return `rgb(${tup[0]}, ${tup[1]}, ${tup[2]})`;
    else if (tup.length === 4)
        return `rgba(${tup[0]}, ${tup[1]}, ${tup[2]}, ${tup[3]})`;
    else
        return undefined;
}

const Prezentare = props => {
    const canvasRef = useRef(null);
    const [animationOn, setAnimation] = useState(0);

    useEffect(() => { // Venn animation
        if (animationOn !== 0)
            return;
        setAnimation(1);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const frameLim = 60 * 7;
        let frameCount = 0;

        const frame = () => {
            const drawCircle = (x, y, color) => {
                ctx.beginPath();
                ctx.arc(x, y, 150, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
                ctx.fillStyle = tupleToRGB(color.slice(0, 4));

                ctx.shadowColor = tupleToRGB(color.slice(0, 3)); // string
                ctx.shadowOffsetX = 0; // integer
                ctx.shadowOffsetY = 0; // integer
                ctx.shadowBlur = 20;

                ctx.fill();
                ctx.stroke();
            }

            if (frameCount < frameLim / 3) {
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, 10000, 10000);
    
                const progress = 1 - (frameCount / frameLim);
                ctx.font = "24px JetBrainsMono, Courier, monospace";
                drawCircle(300, 300 + progress * 150, [0, 200, 0, 0.4], 0);
                drawCircle(300 - 150 * Math.cos(Math.PI / 6) * progress, 300 - 150 * Math.sin(Math.PI / 6) * progress, [255, 0, 0, 0.5]);
                drawCircle(300 + 150 * Math.cos(Math.PI / 6) * progress, 300 - 150 * Math.sin(Math.PI / 6) * progress, [0, 0, 255, 0.45]);
    
                ctx.fillStyle = 'white';
                ctx.font = "22px JetBrainsMono, Courier, monospace";
                ctx.shadowColor = 'white';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 20;
                ctx.fillText("Informatică", 170  - 150 * Math.cos(Math.PI / 6) * progress, 280 - 150 * Math.sin(Math.PI / 6) * progress);
                ctx.fillText("Excelență", 300 + 150 * Math.cos(Math.PI / 6) * progress, 280 - 150 * Math.sin(Math.PI / 6) * progress);
                ctx.fillText("Performanță", 225, 320 + 200 * progress);

                window.setTimeout(frame, 1000.0 / 30);
            }
            else if (frameCount < frameLim) {
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, 10000, 10000);
    
                const progress = (frameCount / frameLim);
                ctx.font = "24px JetBrainsMono, Courier, monospace";
                drawCircle(300, 300 + 2.0 / 3 * 150, [0, 200, 0, 0.4], 0);
                drawCircle(300 - 150 * Math.cos(Math.PI / 6) * 2.0 / 3, 300 - 150 * Math.sin(Math.PI / 6) * 2.0 / 3, [255, 0, 0, 0.5]);
                drawCircle(300 + 150 * Math.cos(Math.PI / 6) * 2.0 / 3, 300 - 150 * Math.sin(Math.PI / 6) * 2.0 / 3, [0, 0, 255, 0.45]);
    
                ctx.fillStyle = 'white';
                ctx.font = "22px JetBrainsMono, Courier, monospace";
                ctx.shadowColor = 'white';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 20;
                ctx.fillText("Informatică", 170  - 150 * Math.cos(Math.PI / 6) * 2.0 / 3, 280 - 150 * Math.sin(Math.PI / 6) * 2.0 / 3);
                ctx.fillText("Excelență", 300 + 150 * Math.cos(Math.PI / 6) * 2.0 / 3, 280 - 150 * Math.sin(Math.PI / 6) * 2.0 / 3);
                ctx.fillText("Performanță", 225, 320 + 200 * 2.0 / 3);

                ctx.font = "24px JetBrainsMono, Courier, monospace";
                ctx.fillStyle = tupleToRGB([255, 255, 255, (progress - 1.0 / 3) * 3 / 2]);
                ctx.fillText("SEPI", 270, 310);

                window.setTimeout(frame, 1000.0 / 30);
            }

            frameCount+= 1;
        }
        window.setTimeout(frame, 1000.0 / 30);
    });

    return (
        <div id="prezentare">
            <div id="PrezentareScreen">
                <div id="VennDiagramContainer">
                    <canvas ref={canvasRef} id="VennDiagram" width="600px" height="600px" />
                </div>
                <div id="PrezentareText"> {/** Fix responsiveness! **/}
                    <div className="TextContainer"><span style={{fontSize: "18px"}}>
                        <br />
                        <p>
                            <b>SEPI</b> este o asociație care-și propune să promoveze învățământul informatic românesc de performanță.
                        </p>
                        <p>
                            Membrii SEPI sunt coordonatori și membri ai Comisiilor Naționale ale Olimpiadei Naționale de Informatică, ai Comisiilor de selecție a Loturilor reprezentative ale României pe parcursul celor aproape 30 de ani în care România a reprezentat una dintre forțele recunoscute pe plan mondial în domeniu.
                        </p>
                        <p>
                            În asociație se regăsesc cadre didactice cu o pregătire profesională de excepție, foști olimpici naționali și internaționali - studenți la renumite universități din țară și din străinătate, specialiști în domeniul IT, toți uniți de pasiuni comune: informatica, programarea și algoritmica.
                        </p>
                    </span></div>
                </div>
            </div>
        </div>
    );
};

export default Prezentare;
