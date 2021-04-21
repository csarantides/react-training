import React, {useContext} from 'react'
import {NameContext, AgeContext} from '../../tools/navigation'

function UseContextC() {
    const name = useContext(NameContext)
    const age = useContext(AgeContext)
    return <div>My name is {name} and my age is {age} years old</div>
}

export default UseContextC