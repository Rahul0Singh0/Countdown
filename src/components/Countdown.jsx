import { useState } from 'react';
import './Countdown.css';
import { useRef } from 'react';
import { useEffect } from 'react';

function Countdown() {

    const [target, setTarget] = useState(null);
    const [diff, setDiff] = useState(0);
    const id = useRef(null);

    function handleSubmit() {
        id.current = setInterval(() => {
            setDiff(new Date(target) - new Date());
            console.log(diff);
        }, 1000);
    }

    useEffect(() => {
        if(diff < 0) {
            clearInterval(id.current);
        }
    }, [diff]);

    const getDays = () => {
        return Math.floor(diff/(1000*60*60*24));
    }

    const getHours = () => {
        const hoursInMs = diff%(1000*60*60*24);
        return Math.floor(hoursInMs/(1000*60*60*24));
    }

    const getMinutes = () => {
        const minutesInMs = diff%(1000*60*60);
        return Math.floor(minutesInMs/(1000*60));
    }

    const getSeconds = () => {
        const secondInMs = diff%(1000*60);
        return Math.floor(secondInMs/(1000));
    }

    return (
        <>
            <h1>Countdown Timer App</h1>
            <div id="input">
                <input 
                    type="datetime-local" 
                    id="datetime"
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setTarget(e.target.value)
                    }}
                />
                <button id="submit" onClick={handleSubmit}>Start</button>
            </div>

            <div id='display'>
                <ul>
                    <li><span id='days'>{getDays()}</span>days</li>
                    <li><span id='hours'>{getHours()}</span>hours</li>
                    <li><span id='minutes'>{getMinutes()}</span>minutes</li>
                    <li><span id='seconds'>{getSeconds()}</span>seconds</li>
                </ul>
            </div>
        </>
    );
}

export default Countdown;