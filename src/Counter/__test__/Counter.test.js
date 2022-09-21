import React from 'react';
import Counter from '../Counter';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
    render(<Counter />);
    const header = screen.getByTestId('header')

    expect(header.textContent).toBe('My Counter')
})

test('counter starts with text of zero', () => {
    render(<Counter />)
    const counter = screen.getByTestId('counter')

    expect(counter.textContent).toBe('0')
})

test('input starts with value of one', () => {
    render(<Counter />)
    const input = screen.getByTestId('input')

    expect(input.value).toBe('1')
})

test('add button renders with value of +', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')

    expect(addBtn.textContent).toBe('+')
})

test('minus button renders with value of -', () => {
    render(<Counter />)
    const minusBtn = screen.getByTestId('minus-btn')

    expect(minusBtn.textContent).toBe('-')
})

test('changing value of input works correctly', () => {
    render(<Counter />)
    const input = screen.getByTestId('input')

    fireEvent.change(input, {
        target: {
            value: '5'
        }
    })

    expect(input.value).toBe('5')
})

test('clicking on plus button adds to counter', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')
    const counter = screen.getByTestId('counter')

    fireEvent.click(addBtn)

    expect(counter.textContent).toBe('1')
})

test('clicking on minus button subtracts from counter', () => {
    render(<Counter />)
    const minusBtn = screen.getByTestId('minus-btn')
    const counter = screen.getByTestId('counter')

    fireEvent.click(minusBtn)

    expect(counter.textContent).toBe('-1')
})

test('changing input value then clicking add button adds to counter', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')
    const counter = screen.getByTestId('counter')
    const input = screen.getByTestId('input')

    fireEvent.change(input, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(addBtn)

    expect(counter.textContent).toBe('5')
})

test('changing input value then clicking minus button minuses the counter', () => {
    render(<Counter />)
    const minusBtn = screen.getByTestId('minus-btn')
    const counter = screen.getByTestId('counter')
    const input = screen.getByTestId('input')

    fireEvent.change(input, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(minusBtn)

    expect(counter.textContent).toBe('-5')
})

test('pressing add button multiple times keeps adding to the counter', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')
    const counter = screen.getByTestId('counter')
    // const input = screen.getByTestId('input')

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)

    expect(counter.textContent).toBe('3')
})

test('pressing add button multiple times then minus button works on the counter', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')
    const minusBtn = screen.getByTestId('minus-btn')
    const counter = screen.getByTestId('counter')
    // const input = screen.getByTestId('input')

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(minusBtn)

    expect(counter.textContent).toBe('2')
})

test('pressing add button multiple times then changing input and then pressing add button works on the counter', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')
    // const minusBtn = screen.getByTestId('minus-btn')
    const counter = screen.getByTestId('counter')
    const input = screen.getByTestId('input')

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.change(input, {
        target: {
            value: '5'
        }
    })
    fireEvent.click(addBtn)

    expect(counter.textContent).toBe('8')
})

test('pressing add button multiple times then changing input and then pressing minus button works on the counter', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId('add-btn')
    const minusBtn = screen.getByTestId('minus-btn')
    const counter = screen.getByTestId('counter')
    const input = screen.getByTestId('input')

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.change(input, {
        target: {
            value: '5'
        }
    })
    fireEvent.click(minusBtn)

    expect(counter.textContent).toBe('-2')
})