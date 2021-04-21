import React, { Component } from 'react'
import '../css/style.css'

class Destructors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {

        const {name, age} = this.props
        const {count} = this.state

        return (
            <div className="pageContent">
                <h1 className="pageTitle">Destructors</h1>
                <div>Destructoring is an ES6 feature that makes it possible to unpack values from areas or properties from objects into distinct variables.</div>
                <br />
                <div>Destructuring props and states improves code readability.</div>
                <br />
                <div>Function</div>
                <div>Ex:</div>
                <div>const {name, age} = props</div>
                <br />
                <div>For Functions and Arrow Functions don't forget to pass in props as a paramater</div>
                <br />
                <div>Class</div>
                <div>Ex:</div>
                <div>const {name,age} = this.state</div>
                <br />
                <h3>The following code displays promps as well as adds 1 for every time that you click the button</h3>
                <div className="codeEx">
                    <h2 className="codeExTitle">Code Example:</h2>
                    <hr />
                    <div>
                        <div className="filePath">/src/App.js</div>
                        <pre>
                            <code>{`
    import React from 'react';
    import './App.css';
    import Destructor from './components/Destructor'

    function App() {
        return (
            <div className="App">
                <Destructor name="Chris Sarantides" age="32" />
            </div>
        );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/destructors.js</div>
                        <pre>
                            <code>{`
    import React, { Component } from 'react'

    class Destructor extends Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        clickHandler = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }))
        }

        render() {

            const {name, age} = this.props
            const {count} = this.state

            return (
                <div>
                    <h1>My name is {name} and my age is {age}.</h1>
                    <button onClick={this.clickHandler}>Clicked {count} Times</button>
                </div>
            )

        }

    }

    export default Destructor
                            `}</code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className="codeDemo">
                    <h1>My name is {name} and my age is {age}.</h1>
                    <button onClick={this.clickHandler}>Clicked {count} Times</button>
                </div>
            </div>
        )

    }

}

export default Destructors