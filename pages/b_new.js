import { withRouter } from 'next/router'
import React, { 
    useState, 
    useEffect, 
    useReducer, 
    useRef, 
    useMemo, 
    memo, 
    useCallback } from 'react'
import { Divider } from 'antd';
import { Button } from 'antd'

function MyCount () {
    const [count , dispatchCount] = useReducer(bReducer, 0)
    const [inputValue, setValue] = useState('zhaikui')
    const change = useCallback(() => dispatchCount({type: 'add'}), [])
    const config = useMemo(() => ({
        color: count > 3 ? 'red' : 'blue',
        text: `count is ${count}`
    }), [count])
    return (
        <>
          <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
          <span>{inputValue}</span>
          <Children onClick={change} config={config} />
        </>
    )
}
const Children = memo(function ({onClick, config}) {
    console.log('children render')
    return (
        <Button onClick={onClick} style={{color: config.color}}>{config.text}</Button>
    )
})

const bReducer = function (state = 0, action) {
    switch (action.type) {
        case 'add': 
        return state + 1;
        case 'minus':
        return state - 1;
        default: 
        return state
    }
}

export default MyCount