import React, {useState, useEffect} from 'react'

function UseEffect() {

    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [count, setCount] = useState(0)

    const posFunc = e => {
        setPosX(e.clientX)
        setPosY(e.clientY)
    }

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        window.addEventListener('mouseover', posFunc)
        const timeInterval = setInterval(tick,1000)
        return () => {
            window.removeEventListener('mouseover', posFunc)
            clearInterval(timeInterval)
            alert('Unmount')
        }
    }, [])

    return (
            <div>
                <h3>{count}</h3>
                X: {posX}, Y: {posY}
            </div>
        ) 
    }

export default UseEffect