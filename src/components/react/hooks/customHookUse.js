import React from 'react'
import CustomHook from './customHook'

function CustomHookUse() {
    const spacing = {
        margin: '5px'
    }

    const [count, add, mult, sub, div, reset, valObj] = CustomHook(10, 3, 5, 7, 9)

    return ( 
        <div className="pageContent">
            <h1 className="pageTitle">Custom Hook</h1>
            <div className="subTitle">Hooks so far:</div>
            <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>useContext</li>
                <li>useReducer</li>
                <li>useCallback</li>
                <li>useMemo</li>
                <li>useRef</li>
            </ul>
            <br />
            <div>They are all supplied by the React library.</div>
            <br />
            <div>What about custom hooks.</div>
            <br />
            <div className="subField">Custom Hooks:</div>
            <ul>
                <li>A custom Hook is basically a JavaScript function whose name starts with "use".</li>
                <li>A custom hook can also call other Hooks if required.</li>
            </ul>
            <br />
            <div>Why would you want to create hooks: Share Logic - Alternative to Higher Order Components and Render Props.</div>
            <h3>The following code lets you add 3, multiply by 5, subtract 7, devide by 9 or rest the total to 10 based on the buttons that are clicked on.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import './App.css'
    import CustomHookUse from './components/CustomHookUse'


    function App() {
        return (
            <div className="App">
                <CustomHookUse />
            </div>
        );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/customHook.js</div>
                        <pre>
                            <code>{`
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
                        `}</code>
                    </pre>
                </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/customHookUse.js</div>
                        <pre>
                            <code>{`
    import React from 'react'
    import CustomHook from './CustomHook'

    function CustomHookUse() {
        const spacing = {
            margin: '5px'
        }

        const [count, add, mult, sub, div, reset, valObj] = CustomHook(10, 3, 5, 7, 9)

        return ( 
            <div>
                <h2>{count}</h2>
                <div>
                    <button style={spacing} onClick={add}>Add {valObj.addNum}</button>
                    <button style={spacing} onClick={mult}>Multiply {valObj.multNum}</button>
                    <button style={spacing} onClick={sub}>Subtract {valObj.subNum}</button>
                    <button style={spacing} onClick={div}>Divide {valObj.divNum}</button>
                    <button style={spacing} onClick={reset}>Reset</button>
                </div>
            </div>
        )
    }

    export default CustomHookUse
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <h2>{count}</h2>
                <div>
                    <button style={spacing} onClick={add}>Add {valObj.addNum}</button>
                    <button style={spacing} onClick={mult}>Multiply {valObj.multNum}</button>
                    <button style={spacing} onClick={sub}>Subtract {valObj.subNum}</button>
                    <button style={spacing} onClick={div}>Divide {valObj.divNum}</button>
                    <button style={spacing} onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default CustomHookUse