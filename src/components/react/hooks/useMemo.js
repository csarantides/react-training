import React, { useState, useMemo } from 'react'
import '../../css/style.css'

function UseMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while( i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div className="pageContent">
            <h1 className="pageTitle">useMemo Hook</h1>
            <div>useMemo is used for performance optimization.</div>
            <br />
            <pre><code>{`import React, { useMemo } from 'react' - Invokes the provided function and caches its result`}</code></pre>
            <br />
            <div>useMemo: invokes the provided function and caches its result</div>
            <h3>The following code lets you click on two buttons to show the difference of which one calculates faster. The top button also displays if it's even or odd.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Examples:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react';
    import './App.css';
    import Counter from './components/UseMemo'
    
    function App() {
        return (
            <div className="App">
                <Counter />
            </div>
        );
    }
    
    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useMemo.js</div>
                    <pre>
                        <code>{`
    import React, { useState, useMemo } from 'react'

    function UseMemo() {
        const [counterOne, setCounterOne] = useState(0)
        const [counterTwo, setCounterTwo] = useState(0)

        const incrementOne = () => {
            setCounterOne(counterOne + 1)
        }

        const incrementTwo = () => {
            setCounterTwo(counterTwo + 1)
        }


        const isEven = useMemo(() => {
            let i = 0
            while( i < 2000000000) i++
            return counterOne % 2 === 0
        }, [counterOne])

        return (
            <div>
                <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                    <span>{isEven ? ' Even' : ' Odd'}</span>
                </div>
                <div>
                    <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
                </div>
            </div>
        )
    }

    export default UseMemo
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <div>
                    <button onClick={incrementOne}>Counter One - {counterOne}</button>
                    <span>{isEven ? ' Even' : ' Odd'}</span>
                </div>
                <div>
                    <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
                </div>
            </div>
        </div>
    )
}

export default UseMemo