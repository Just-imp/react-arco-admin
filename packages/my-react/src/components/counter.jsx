import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/store/counterSlice.js'
export default function Counter() {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={() => { dispatch(increment()) }}>+</button><button onClick={() => { dispatch(decrement()) }}>-</button>
        </div>
    )
}
