import React, {useRef, useEffect} from 'react'
import '../../css/style.css'
 
function UseRef() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.style.backgroundColor="red"
    }, [])

    return (
        <div>
            <h1 className="pageTitle">useRef Hook</h1>
            <div>useRef Hook: This hook makes it possible to access DOM nodes directly within functional components.</div>
            <br />
            <pre><code>{`import React, { useRef } from 'react' - makes it possible to access DOM nodes directly within functional components.`}</code></pre>
            <h3>The following code makes the input box red.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import './App.css'
    import UseRef from './components/UseRef'

    function App() {
    return (
    <div className="App">
    <UseRef />
    </div>
    );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/useRef.js.js</div>
                        <pre>
                            <code>{`
    import React, {useRef, useEffect} from 'react'
    
    function UseRef() {

        const inputRef = useRef(null)

        useEffect(() => {
            inputRef.current.style.backgroundColor="red"
        }, [])

        return (
            <div>
                <input type="text" ref={inputRef} />
            </div>
        )
    }

    export default UseRef
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <input type="text" ref={inputRef} />
            </div>
        </div>
    )
}

export default UseRef