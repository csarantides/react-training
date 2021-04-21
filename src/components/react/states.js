import React, { Component } from 'react'
import '../css/style.css'

class States extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            index: 0
        }
    }

    ClickCount = () => {
        this.setState((prevState) => ({
            count: prevState.count * 2,
            index: prevState.index + 1 
        }))
    }

    render() {
        return (
            <div className="pageContent">
                <h1 className="pageTitle">States</h1>
                <h3 className="betterChoice">While state is not depreciated, there is an easier way to control state and that is with <a href="/hooks/useState">useState</a></h3>
                <br />
                <div class="subTitle">State is</div>
                <ol>
                    <li>It is an object that is privatley maintained in a componet.</li>
                    <li>A state can influence what is rendered in the browsser.</li>
                    <li>State can be changed within the component.</li>
                </ol>
                <br />
                <div class="subTitle">State</div>
                <ol>
                    <li>State is managed within the component</li>
                    <li>Variables declared within the function body.</li>
                    <li>State can be changed.</li>
                    <li>Access</li>
                    <ul>
                        <li>useState Hook within Functional Components</li>
                        <li>useState Hook within Functional Components</li>
                        <li>useState Hook within Functional Components</li>
                        <li>this.state within Class Components</li>
                    </ul>
                </ol>
                <br />
                <div>Constructors are used to default states</div>
                <pre>
                    <code>{`
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
                    `}</code>
                </pre>
                <br />
                <div>setState is used to change the state value along with Event Handeling</div>
                <pre>
                    <code>{`
    ClickCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
                    `}</code>
                </pre>
                <br />
                <div>You can't never modify a state dirrectly, using setState otherwise React will not rerender the component.</div>
                <br />
                <div>Calls to setState are asynchronous.</div>
                <br />
                <div class="subTitle">Rules of setState:</div>
                <ol>
                    <li>Always make use of setState and never modify the state dirrectly.</li>
                    <li>If code has to be executed after the state has been updated, the place that code in the call back function whick is the second argument in the setState method.</li>                    <li>Always make use of setState and never modify the state dirrectly.</li>
                    <li>When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.</li>
                </ol>
                <br />
                <div>setState can pass in two paramaters prevState and props.</div>
                <br />
                <pre>
                    <code>{`
    this.setState((prevState, props) => ({
        count: prevState.count + 1 + this.props.addValue
    }))
                    `}</code>
                </pre>
                <br />
                <div>prevState is the previous state</div>
                <br />
                <h3>The following code example lets you click on the button and every time you click on it it gives you a new total based on 2^(the umber of times you clicked the button)</h3>
                <div className="codeEx">
                    <h2 className="codeExTitle">Code Example:</h2>
                    <hr />
                    <div>
                        <div className="filePath">/src/App.js</div>
                        <pre>
                            <code>{`
    import React from 'react';
    import './App.css';
    import SetStateClass from './components/SetStateClass'

    function App() {
        return (
            <div className="App">
                <SetStateClass />
            </div>
        );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/states.js</div>
                        <pre>
                            <code>{`
    import React, { Component } from 'react'

    class States extends Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 1,
                index: 0
            }
        }

        ClickCount = () => {
            this.setState((prevState) => ({
                count: prevState.count * 2,
                index: prevState.index + 1 
            }))
        }

        render() {
            return (
                <div>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.ClickCount}>Click Here (2^{this.state.index})</button>
                </div>
            )
        }
        
    }

    export default States
                            `}</code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className="codeDemo">
                    <h2>{this.state.count}</h2>
                    <button onClick={this.ClickCount}>Click Here (2^{this.state.index})</button>
                </div>
            </div>
        )
    }

}

export default States