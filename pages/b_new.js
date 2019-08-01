import { withRouter } from 'next/router'
import React, { useState, useEffect, useReducer, useRef, useMemo, memo } from 'react'
import { Divider } from 'antd';
import { Button } from 'antd'

function MyCount () {
    const [count , setCount] = useState(0)
    const [inputValue, setValue] = useState('zhaikui')
    const change = () => {
        setCount(c => c + 1)
    }
    const config = {
        color: count > 3 ? 'red' : 'blue',
        text: `count is ${count}`
    }
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


export default MyCount