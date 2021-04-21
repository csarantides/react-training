import React, {useState} from 'react'
import '../../css/style.css'

function UseState() {

    const [description, setDescription] = useState('')
    const [calc, setCalc] = useState({base: 0, mult: 0, add: 0, total: 0})
    const [items, setItems] = useState([])

    const spacing = {marginLeft: '10px',marginRight: '10px'}

    const addItem = () => {
        setItems([
            ...items,
            {
                id: (items.length + 1),
                base: calc.base,
                mult: calc.mult,
                add: calc.add,
                total: calc.total
            }
        ])
    }

    const itemList = items.map(item => <li key={item.id}>(({item.base} * {item.mult}) + {item.add}) = {item.total} <button onClick={() => {removeItem(item.id)}}>Remove</button></li>)

    const removeItem = index => {
        setItems(items.filter(item => item.id !== index))
    }

    return (
        <div className="pageContent">
            <h1 className="pageTitle">useState Hook</h1>
            <div>This Hook is used for states</div>
            <br />
            <pre><code>{`import React, { useState } from 'react' - Replacement for States</div>`}</code></pre>
            <br />
            <div>const [stateVariable, setStateVariable] = useState(initialValue)</div>
            <br />
            <div>a state variable can be a string, a number, a boolean, an object or even an array</div>
            <br />
            <div>For objects and arrays use the spread operator …, but note useReducer is a better call typically for objects and arrays while useState is better for strings, numbers and booleans</div>
            <br />
            <div className="subTitle">Summary - UseState:</div>
            <ul>
                <li>The useState hook lets you add state to functional components</li>
                <li>In classes, the state is always an object.</li>
                <li>With the useState hook, the state doesn't have to be an object.</li>
                <li>The useState hook returns an array with 2 elements.</li>
                <li>The first element is the current value of the state, and the second element is a state setter function.</li>
                <li>New state value depends on the previous state value?You can pass a function to the setter function.</li>
                <li>When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.</li>
            </ul>
            <br />
            <h3>The following code lets you create new calculations to add or remove to a data storage and upon typing in the text box you will see a display of text outside of it.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import './App.css'
    import UseState from './components/UseState'

    function App() {
        return (
            <div className="App">
                <UseState />
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useState.js</div>
                    <pre>
                        <code>{`
    import React, {useState} from 'react'
    import '../../css/style.css'

    function UseState() {

        const [description, setDescription] = useState('')
        const [calc, setCalc] = useState({base: 0, mult: 0, add: 0, total: 0})
        const [items, setItems] = useState([])

        const spacing = {marginLeft: '10px',marginRight: '10px'}

        const addItem = () => {
            setItems([
                ...items,
                {
                    id: (items.length + 1),
                    base: calc.base,
                    mult: calc.mult,
                    add: calc.add,
                    total: calc.total
                }
            ])
        }

        const itemList = items.map(item => <li key={item.id}>(({item.base} * {item.mult}) + {item.add}) = {item.total} <button onClick={() => {removeItem(item.id)}}>Remove</button></li>)

        const removeItem = index => {
            setItems(items.filter(item => item.id !== index))
        }

        return (
            <div>
                <div className="codeDemo">
                    <h2 className="codeDemoTital">Code Demo:</h2>
                    <div style={{marginTop: '10px'}}>
                        <textarea onChange={e => setDescription(e.target.value)} value={description} />
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label style={spacing}>Base Number: </label>
                        <input type="text" value={calc.base} onChange={e => setCalc({ ...calc, base: e.target.value })} />
                        <label style={spacing}>Multiplication Number: </label>
                        <input type="text" value={calc.mult} onChange={e => setCalc({ ...calc, mult: e.target.value })} />
                        <label style={spacing}>Addition Number: </label>
                        <input type="text" value={calc.add} onChange={e => setCalc({ ...calc, add: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <button style={spacing} onClick={() => setCalc({ ...calc, total: !isNaN((parseInt(calc.base) * parseInt(calc.mult)) + parseInt(calc.add)) ? ((parseInt(calc.base) * parseInt(calc.mult)) + parseInt(calc.add)) : 'This is not a number' })}>Calculate</button>
                    </div>
                    <br />
                    <div>
                        <button style={spacing} onClick={() => setCalc({ ...calc, base: 0, mult: 0, add: 0, total: 0})}>Reset</button>
                    </div>
                    <h2>((base * mult) + add) = {calc.total}</h2>
                    <button onClick={addItem}>Add Item</button>
                    <h3>{description}</h3>
                    <ol>{itemList}</ol>
                </div>
            </div>
        )
    }

    export default UseState
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <div style={{marginTop: '10px'}}>
                    <textarea onChange={e => setDescription(e.target.value)} value={description} />
                </div>
                <div style={{marginTop: '10px'}}>
                    <label style={spacing}>Base Number: </label>
                    <input type="text" value={calc.base} onChange={e => setCalc({ ...calc, base: e.target.value })} />
                    <label style={spacing}>Multiplication Number: </label>
                    <input type="text" value={calc.mult} onChange={e => setCalc({ ...calc, mult: e.target.value })} />
                    <label style={spacing}>Addition Number: </label>
                    <input type="text" value={calc.add} onChange={e => setCalc({ ...calc, add: e.target.value })} />
                </div>
                <br />
                <div>
                    <button style={spacing} onClick={() => setCalc({ ...calc, total: !isNaN((parseInt(calc.base) * parseInt(calc.mult)) + parseInt(calc.add)) ? ((parseInt(calc.base) * parseInt(calc.mult)) + parseInt(calc.add)) : 'This is not a number' })}>Calculate</button>
                </div>
                <br />
                <div>
                    <button style={spacing} onClick={() => setCalc({ ...calc, base: 0, mult: 0, add: 0, total: 0})}>Reset</button>
                </div>
                <h2>((base * mult) + add) = {calc.total}</h2>
                <button onClick={addItem}>Add Item</button>
                <h3>{description}</h3>
                <ol>{itemList}</ol>
            </div>
        </div>
    )
}

export default UseState