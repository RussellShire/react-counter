import React, { useState } from 'react';

function Counter() {
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    return (
        <div>
            <h3 data-testid='header'>My Counter</h3>
            <h1 data-testid='counter' type='number'>{counterValue}</h1>
            <div>
                <button 
                    data-testid='minus-btn'
                    onClick={() => {
                        setCounterValue(counterValue - inputValue)}}
                >-</button>
                <input  
                    data-testid='input' 
                    type='number' 
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(parseInt(e.target.value))}}
                ></input>
                <button 
                    data-testid='add-btn'
                    onClick={() => {
                        setCounterValue(counterValue + inputValue)}}
                >+</button>
            </div> 
                
        </div>
    )
}

export default Counter
