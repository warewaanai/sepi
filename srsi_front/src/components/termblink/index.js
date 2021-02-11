import React, { useState, useEffect } from 'react';


const TermBlink = props => {
    const [state, setState] = useState(0);

    const cps = (props.cps ? props.cps : 100);
    const blink = (props.blink ? props.blink : false);

    useEffect(() => {
        if (state === 0) {
            setState({
                text: '_',
                counter: 0,
            });
        }
        else {
            if (state.counter <= props.children.length) {
                window.setTimeout(() => setState({
                    text: props.children.slice(0, state.counter) + (state.counter % 2 || state.counter < props.children.length ? '_' : ''),
                    counter: state.counter + 1,
                }), cps);
            }
            else {
                window.setTimeout(() => setState({
                    text: props.children.slice(0, state.counter) + (state.counter % 2 && blink ? '_' : ''),
                    counter: state.counter + 1,
                }), 700);
            }
        }
    });

    return <> {state ? state.text : null} </>;
};

export default TermBlink;
