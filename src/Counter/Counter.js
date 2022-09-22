import React, { useState } from 'react';

function Counter() {
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    const [counterName, setCounterName] = useState('Counter')

    return (
        <div className='counter'>
            <input 
                type='text' 
                data-testid='header' 
                value={counterName}
                onChange={(e) => {
                    setCounterName(e.target.value)}}
                style={{
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    textTransform: 'capitalize',
                    marginTop: '1rem',
                }}
            ></input>
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
