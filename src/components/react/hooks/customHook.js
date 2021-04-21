import {useState} from 'react'

function CustomHook(initialCount = 0, addVal = 1, multVal = 1, subVal = 1, divVal = 1) {
    const [count, setCount] = useState(0)
    const valObj = {
        addNum: addVal,
        multNum: multVal,
        subNum: subVal,
        divNum: divVal
    }

    const add = () => {
        setCount(prevCount => prevCount + addVal)
    }

    const mult = () => {
        setCount(prevCount => prevCount * multVal)
    }

    const sub = () => {
        setCount(prevCount => prevCount - subVal)
    }

    const div = () => {
        setCount(prevCount => prevCount / divVal)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, add, mult, sub, div, reset, valObj]

}

export default CustomHook