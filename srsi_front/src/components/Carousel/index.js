import React from 'react';
import './index.scss'

const Carousel = (props) => {
    console.log(props.content);


    if (window.innerWidth < 800) {
        return props.content.map(element => {
            return <>
                {element.map(pic => <a href={pic.link}><img src={pic.pic} style={{width: "100%"}} /> </a>)}
            </>;
        });
    }
    else {
        let cnt = 0;
        const rows = props.content.map(element => {
            const pics = element.map(pic =>
                <div className="PictureFrame">
                    <a target="_blank" href={pic.link}>
                        <img src={pic.pic} className="CarouselPic" />
                    </a>
                </div>
            );

            cnt+= 1;
            return <>
                <div className="CarouselRow">
                    <div className="slice" style={{animation: ((cnt % 2 === 0 ? 'slideSliceRight' : 'slideSliceLeft') + ` ${15 + (cnt) % 2 * (cnt / 2 >= 1 ? 5 : 0)}s linear infinite`)}}> { pics } </div>
                    <div className="slice" style={{animation: ((cnt % 2 === 0 ? 'slideSliceRight' : 'slideSliceLeft') + ` ${15 + (cnt) % 2 * (cnt / 2 >= 1 ? 5 : 0)}s linear infinite`)}}> { pics } </div>
                </div>
            </>;
        });

        console.log(rows);

        return <>
            <div className="Carousel" width={props.width}>
                {rows}
            </div>
        </>;
    }
}

export default Carousel;
