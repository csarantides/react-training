import React from 'react'
import '../css/style.css'

function Props(props) {
    return (
        <div className="pageContent">
            <h1 className="pageTitle">Props</h1>
            <br />
            <div>Props are short for properties is an optional input that your component can accept. It also allows the component to be dynamic.</div>
            <br />
            <div>Props are immutable, aka they cannot be changed.</div>
            <br />
            <div>Note: this is used for props in classes but not function, also props.children accesses anything within the called tag when it is between an open tag and an closed tag.</div>
            <br />
            <div className="subTitle">Props:</div>
            <ol>
                <li>props get passed to the component</li>
                <li>Function paramaters</li>
                <li>props are immutable</li>
                <li>Soulution without using state. This makes debugging easier.</li>
                <li>Access</li>
                <ul>
                    <li>props within Functional Components</li>
                    <li>this.props within Class Components</li>
                </ul>
            </ol>
            <h3>The following code example displays the name passed through as a promp along with the nested children data of the promp.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react';
    import './App.css';
    import PropsFunction from './components/PropsFunction'

    function App() {
        return (
            <div className="App">
                    <PropsFunction name='Function Props'>
                        <props name="Chris Sarantides">
                            I have two kids
                        </Props>
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/props.js</div>
                    <pre>
                        <code>{`
    import React from 'react'

    function PropsFunction(props) {
        return (
            <div>
                <h1>Prop: {props.name}</h1>
                <div>{props.children}</div>
            </div>
        )
    }

    export default PropsFunction
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h1>Prop: {props.name}</h1>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Props