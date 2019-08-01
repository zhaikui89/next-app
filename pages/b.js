import {withRouter} from 'next/router'
import React, {useState, useEffect, useReducer, useRef} from 'react'

function reducerB (state= 0, action) {
    switch (action.type) {
        case 'add': 
          return state + 1;
        case 'minus': 
          return state -1;
        default:
          return state    
    }
}
function b (props) {
    const [count, dispatchCount] = useReducer(reducerB, 0)
    const spanRef = useRef()
    useEffect(() => {
        console.log(spanRef)
        const inter = setInterval(() => {
            dispatchCount({type: 'add'})
        }, 1000)
        return () => clearInterval(inter)
    }, [])
    return (
        <span ref={spanRef}>{count}</span>
    )
}
export default withRouter(b)