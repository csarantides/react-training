import React, { Component } from 'react'
import '../css/style.css'
 
class Conditional extends Component {

    constructor() {
    super()
        this.state = {
            IsLoggedIn: true
        }
    }

    render() {
        const {IsLoggedIn} = this.state
        let welcomeMessage = <div>Welcome Guest</div>
        if (IsLoggedIn) {
            welcomeMessage = <div>Welcome Chris Sarantides</div>
        }
        return (
            <div className="pageContent">
                <h1 className="pageTitle">Coditional</h1>
                <div>This lets you add conditional logic into React</div>
                <br />
                <ol>
                    <li>if/else</li>
                    <pre>
                        <code>{`
    if (IsLoggedIn) {
        return <div>Welcome Chris Saramtides</div>
    }
    else {
        return <div>Welcome Guest</div>
    }
                        `}</code>
                    </pre>
                    <li>Element Variables</li>
                    <pre>
                        <code>{`
    if (IsLoggedIn) {
        message = <div>Welcome Chris Saramtides</div>
    }
    else {
        message = <div>Welcome Guest</div>
    }
    return message
                        `}</code>
                    </pre>
                    <li>Ternary Conditional Operator</li>
                    <pre>
                        <code>{`
    return IsLoggedIn ? <div>Welcome Chris Saramtides</div> : <div>Welcome Guest</div>
                        `}</code>
                    </pre>
                    <li>Short Circuit Operator</li>
                    <pre>
                        <code>{`
    return IsLoggedIn && <div>Welcome Chris Saramtides</div>
                        `}</code>
                    </pre>
                </ol>
                <h3>The following displays the result of conditional logic.</h3>
                <div className="codeEx">
                    <h2 className="codeExTitle">Code Example:</h2>
                    <hr />
                    <div>
                        <div className="filePath">/src/App.js</div>
                        <pre>
                            <code>{`
    import React from 'react';
    import './App.css';
    import Conditional from './components/conditional'

    function App() {
        return (
            <div className="App">
                <Conditional />
            </div>
        );
    }

    export default App;
                                `}</code>
                            </pre>
                        </div>
                        <hr />
                        <div>
                            <div className="filePath">/src/components/conditional.js</div>
                            <pre>
                                <code>{`
    import React, { Component } from 'react'
    import '../css/style.css'
    
    class Conditional extends Component {

        constructor() {
        super()
            this.state = {
                IsLoggedIn: true
            }
        }

        render() {
            const {IsLoggedIn} = this.state
            let welcomeMessage = <div>Welcome Guest</div>
            if (IsLoggedIn) {
                welcomeMessage = <div>Welcome Chris Sarantides</div>
            }
            return (
                <div>
                    {welcomeMessage}
                </div>
            )
        }
    }

    export default Conditional
                                `}</code>
                            </pre>
                        </div>
                    </div>
                <br />
                <div className="codeDemo">
                    <h2 className="codeDemoTitle">Code Demo:</h2>
                    {welcomeMessage}
                </div>
            </div>
        )
    }
}

export default Conditional