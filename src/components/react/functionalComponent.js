import React from 'react'
import '../css/style.css'

function FunctionalComponent() {
    return (
        <div className="pageContent">
            <h1 className="pageTitle">Functional Component</h1>
            <div>Functional Components are JavaScript functions that can receive optional properties with props and returns HTML (JSX) which describes the UI.</div>
            <pre>
                <code>{`
    Function Test() {
        return <div>Test</div>
    }
                `}</code>
            </pre>
            <div>Arrow Function representation can used as of ES6</div>
            <pre>
                <code>{`
    const Test = () => {
        return <div>Test</div>
    }
                `}</code>
            </pre>
            <div className="subTitle">Functional Component:</div>
            <ul>
                <li>They are simple functions receiving props and retunrning a declaration.</li>
                <li>Use these as much as possible, aka if this can be done with either component type always go with the functional component over the class component.</li>
                <li>Unlike class Components, functional components do not have access to 'this' keyword.</li>
                <li>Soulution without using state. This makes debugging easier.</li>
                <li>Mainly responsivle for the UI</li>
                <li>This is why they are called Statless/ Dumb/ Presentational components.</li>
                <li>They can provide lifecycle hooks. (v16.7.0-alpha Hooks added this)</li>
                <li>They can maintain their own private data also known as state. (v16.7.0-alpha Hooks added this)</li>
            </ul>
            <h3>The following code example displays the data within a functional component</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react';
    import './App.css';
    import FunctionalComponent from './components/FunctionalComponent'

    function App() {
        return (
            <div className="App">
                <FunctionalComponent />
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/functionalComponent.js</div>
                    <pre>
                        <code>{`
    import React from 'react'

    function FunctionalComponent() {
        return <h1>This is a functional component</h1>
    }

    export default FunctionalComponent
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <h1>This is a functional component</h1>
            </div>
        </div>
    )
}

export default FunctionalComponent