import React, {useReducer} from 'react'
import '../../css/style.css'

const initialState = {
    add: 0,
    mult: 0,
    sub: 0,
    div: 0,
    total: 0,
    equation: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'additionButton':
            return {...state, total: (state.total + parseInt(state.add)), equation: state.equation ? '(' + state.equation + ' + ' + state.add + ')' : state.add}
        case 'addition':
            return {...state, add: action.value}
        case 'multiplicationButton':
            return {...state, total: (state.total * parseInt(state.mult)), equation: state.equation ? '(' + state.equation + ' * ' + state.mult + ')' : null}
        case 'multiplication':
            return {...state, mult: action.value}
        case 'subtractionButton':
            return {...state, total: (state.total - parseInt(state.sub)), equation: state.equation ? '(' + state.equation + ' - ' + state.sub + ')' : state.sub}
        case 'subtraction':
            return {...state, sub: action.value}
        case 'divisionButton':
            return {...state, total: (state.total / parseInt(state.div)), equation: state.equation ? '(' + state.equation + ' / ' + state.div + ')' : null}
        case 'division':
            return {...state, div: action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducer() {

    const [mathObj, dispatch] = useReducer(reducer, initialState)
    const [mathObj2, dispatch2] = useReducer(reducer, initialState)

    const spacing = {
        margin: '10px'
    }

    return (
        <div className="pageContent">
            <h1 className="pageTitle">useReducer Hook</h1>
            <div>useReducer is a hook that is used for state managment</div>
            <br />
            <pre><code>{`import React, { useReducer } from 'react' - What useState is built out of, acts like redux`}</code></pre>
            <div>It is an alternative to useState.</div>
            <br />
            <div>useState is built using useReducer.</div>
            <br />
            <div>Like the Javascript Reducer function:</div>
            <br />
            <div>const array1 = [1, 2, 3, 4];</div>
            <div>const reducer = (accumulator, currentValue) => accumulator + currentValue;</div>
            <br />
            <div>// 1 + 2 + 3 + 4</div>
            <div>console.log(array1.reduce(reducer));</div>
            <div>// expected output: 10</div>
            <br />
            <div>// 5 + 1 + 2 + 3 + 4</div>
            <div>console.log(array1.reduce(reducer, 5));</div>
            <div>// expected output: 15</div>
            <br />
            <div>const [count, dispatch] = useReducer(reducer, initialState)</div>
            <br />
            <div>dispatch method allows us to execute code corresponding to a specific action.</div>
            <br />
            <div>You must make the two constents</div>
            <pre>
                <code>{`
    const initialState = 0
    const reducer = (state, action) => {
        return newState
    }
                `}</code>
            </pre>
            <br />
            <div>action paramater is an instruction to the reducer function.</div>
            <br />
            <div>switch statements are used for reducer function</div>
            <br />
            <div>Multiple useReducers works for cases where you want extra reducers with same state transitions.</div>
            <br />
            <div>The point of this is to avoid complexity of merging this state if it were to be an object and reduces duplication of code within the reducer function.</div>
            <br />
            <h3>The following code lets you create equations of data based on the addition, subtraction, multiplication and devision that you choose. THere are two sections of this that dont interact with eachother.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React, {createContext} from 'react'
    import './App.css'
    import UseReducer from './components/useReducer'

    function App() {
        return (
            <div className="App">
                <UseReducer />
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useReducer.js</div>
                    <pre>
                        <code>{`
    import React, {useReducer} from 'react'

    const initialState = {
        add: 0,
        mult: 0,
        sub: 0,
        div: 0,
        total: 0,
        equation: null
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'additionButton':
                return {...state, total: (state.total + parseInt(state.add)), equation: state.equation ? '(' + state.equation + ' + ' + state.add + ')' : state.add}
            case 'addition':
                return {...state, add: action.value}
            case 'multiplicationButton':
                return {...state, total: (state.total * parseInt(state.mult)), equation: state.equation ? '(' + state.equation + ' * ' + state.mult + ')' : null}
            case 'multiplication':
                return {...state, mult: action.value}
            case 'subtractionButton':
                return {...state, total: (state.total - parseInt(state.sub)), equation: state.equation ? '(' + state.equation + ' - ' + state.sub + ')' : state.sub}
            case 'subtraction':
                return {...state, sub: action.value}
            case 'divisionButton':
                return {...state, total: (state.total / parseInt(state.div)), equation: state.equation ? '(' + state.equation + ' / ' + state.div + ')' : null}
            case 'division':
                return {...state, div: action.value}
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    function UseReducer() {

        const [mathObj, dispatch] = useReducer(reducer, initialState)
        const [mathObj2, dispatch2] = useReducer(reducer, initialState)

        const spacing = {
            margin: '10px'
        }

        return (
            <div>
                <div>
                    <h2>{mathObj.equation ? <span>{mathObj.equation} = </span>: null} {mathObj.total}</h2>
                    <div>
                        <label style={spacing}>Addition: </label>
                        <input type="text" value={mathObj.add} onChange={e => dispatch({type: 'addition', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'additionButton', value: e.target.value})}>Add</button>
                        <label style={spacing}>Multipication: </label>
                        <input type="text" value={mathObj.mult} onChange={e => dispatch({type: 'multiplication', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'multiplicationButton', value: e.target.value})}>Multiply</button>
                        <label style={spacing}>Subtraction: </label>
                        <input type="text" value={mathObj.sub} onChange={e => dispatch({type: 'subtraction', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'subtractionButton', value: e.target.value})}>Subtract</button>
                        <label style={spacing}>Division: </label>
                        <input type="text" value={mathObj.div} onChange={e => dispatch({type: 'division', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'divisionButton', value: e.target.value})}>Divide</button>
                    </div>
                    <br />
                    <div>
                        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
                    </div>
                </div>
                <div>
                    <h2>{mathObj2.equation ? <span>{mathObj2.equation} = </span>: null} {mathObj2.total}</h2>
                    <div>
                        <label style={spacing}>Addition: </label>
                        <input type="text" value={mathObj2.add} onChange={e => dispatch2({type: 'addition', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'additionButton', value: e.target.value})}>Add</button>
                        <label style={spacing}>Multipication: </label>
                        <input type="text" value={mathObj2.mult} onChange={e => dispatch2({type: 'multiplication', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'multiplicationButton', value: e.target.value})}>Multiply</button>
                        <label style={spacing}>Subtraction: </label>
                        <input type="text" value={mathObj2.sub} onChange={e => dispatch2({type: 'subtraction', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'subtractionButton', value: e.target.value})}>Subtract</button>
                        <label style={spacing}>Division: </label>
                        <input type="text" value={mathObj2.div} onChange={e => dispatch2({type: 'division', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'divisionButton', value: e.target.value})}>Divide</button>
                    </div>
                    <br />
                    <div>
                        <button onClick={() => dispatch2({type: 'reset'})}>Reset</button>
                    </div>
                </div>
            </div>
        )

    }

    export default UseReducer
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <div>
                    <h2>{mathObj.equation ? <span>{mathObj.equation} = </span>: null} {mathObj.total}</h2>
                    <div>
                        <label style={spacing}>Addition: </label>
                        <input type="text" value={mathObj.add} onChange={e => dispatch({type: 'addition', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'additionButton', value: e.target.value})}>Add</button>
                        <label style={spacing}>Multipication: </label>
                        <input type="text" value={mathObj.mult} onChange={e => dispatch({type: 'multiplication', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'multiplicationButton', value: e.target.value})}>Multiply</button>
                        <label style={spacing}>Subtraction: </label>
                        <input type="text" value={mathObj.sub} onChange={e => dispatch({type: 'subtraction', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'subtractionButton', value: e.target.value})}>Subtract</button>
                        <label style={spacing}>Division: </label>
                        <input type="text" value={mathObj.div} onChange={e => dispatch({type: 'division', value: e.target.value})} />
                        <button onClick={e => dispatch({type: 'divisionButton', value: e.target.value})}>Divide</button>
                    </div>
                    <br />
                    <div>
                        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
                    </div>
                </div>
                <div>
                    <h2>{mathObj2.equation ? <span>{mathObj2.equation} = </span>: null} {mathObj2.total}</h2>
                    <div>
                        <label style={spacing}>Addition: </label>
                        <input type="text" value={mathObj2.add} onChange={e => dispatch2({type: 'addition', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'additionButton', value: e.target.value})}>Add</button>
                        <label style={spacing}>Multipication: </label>
                        <input type="text" value={mathObj2.mult} onChange={e => dispatch2({type: 'multiplication', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'multiplicationButton', value: e.target.value})}>Multiply</button>
                        <label style={spacing}>Subtraction: </label>
                        <input type="text" value={mathObj2.sub} onChange={e => dispatch2({type: 'subtraction', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'subtractionButton', value: e.target.value})}>Subtract</button>
                        <label style={spacing}>Division: </label>
                        <input type="text" value={mathObj2.div} onChange={e => dispatch2({type: 'division', value: e.target.value})} />
                        <button onClick={e => dispatch2({type: 'divisionButton', value: e.target.value})}>Divide</button>
                    </div>
                    <br />
                    <div>
                        <button onClick={() => dispatch2({type: 'reset'})}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UseReducer