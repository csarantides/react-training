import React, { Component } from 'react'

class EventHandeling extends Component {

    constructor() {
        super()
        this.state = {
            hoverCount: 0,
            clickCount: 0
        }
    }

    hoverHandler = (num) => {
        this.setState((prevState) => ({
            hoverCount: (prevState.hoverCount + 1) * num
        }))
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            clickCount: prevState.clickCount + 1
        }))
    }

    render() {
        const {hoverCount, clickCount} = this.state
        return (
            <div className="pageContent">
                <h1 className="pageTitle">Event Handeling</h1>
                <div>Event Handeling is camel case version of JavaScript
 onClick, onMouseOver, etc…</div>
                <br />
                <div>if you want to pass in paramater for functions,</div>
                <br />
                <div>instead of</div>
                <br />
                <pre><code>{`onClick={clickHandler}`}</code></pre>
                <br />
                <div>you would have</div>
                <br />
                <pre><code>{`onClick={() => clickHandler(3)}`}</code></pre>
                <br />
                <div>In this case the event handler is a function not a function call.</div>
                <br />
                <div>We can also bind event handlers because of how 'this' keyword works in JavaScript, it is not because how React works.</div>
                <br />
                <div>There are 4 approaches with Binding</div>
                <ol>
                    <li>bind in render (Performance Issues)</li>
                    <pre><code>{`<button onClick={this.clickHandler.bind(this)}>Click</button>`}</code></pre>
                    <li>Arrow Function (Easiesty way to pass paramaters)</li>
                    <pre><code>{`<button onClick={() => this.clickHandler()}>Click</button>`}</code></pre>
                    <li>bind in constructor  (Better than the first two)</li>
                    <pre>
                        <code>{`
                            constructor(props) {
                                super(props)
                                this.state = {
                                    message: "Hello"
                                }
                                this.clickHandler = this.clickHandler.bind(this)
                            }
                        `}</code>
                    </pre>
                    <li>Arrow function as class property (Better than the first two)</li>
                    <pre>
                        <code>{`
                            clickHandler = () => {
                                this.setState({
                                    message: "Goodbye"
                                })
                            }
                        `}</code>
                    </pre>
                </ol>
                <br />
                <h3>The following code adds 1 for every time you click the button and every time you hover over the text it changes the total to 2 * (the previous total + 1)</h3>
                <div className="codeEx">
                    <h2 className="codeExTitle">Code Examples:</h2>
                    <hr />
                    <div>
                        <div className="filePath">/src/App.js</div>
                        <pre>
                            <code>{`
    import React from 'react';
    import './App.css';
    import EventHandler from './components/EventHandler'

    function App() {
        return (
            <div className="App">
                <EventHandler />
            </div>
        );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/eventHandeling.js</div>
                        <pre>
                            <code>{`
    import React, { Component } from 'react'

    class EventHandeling extends Component {

        constructor() {
            super()
            this.state = {
                hoverCount: 0,
                clickCount: 0
            }
        }

        hoverHandler = (num) => {
            this.setState((prevState) => ({
                hoverCount: (prevState.hoverCount + 1) * num
            }))
        }

        clickHandler = () => {
            this.setState((prevState) => ({
                clickCount: prevState.clickCount + 1
            }))
        }

        render() {
            const {hoverCount, clickCount} = this.state
            return (
                <div>
                    <h2 onMouseOver={() => this.hoverHandler(2)}>Previous Hovered Count {hoverCount} adding 1 and then multiplied by 2</h2>
                    <button onClick={this.clickHandler}>Clicked {clickCount} Times</button>
                </div>
            )
        }
    }

    export default EventHandeling
                            `}</code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className="codeDemo">
                    <h2 className="codeDemoTitle">Code Demo:</h2>
                    <h2 onMouseOver={() => this.hoverHandler(2)}>Previous Hovered Count {hoverCount} adding 1 and then multiplied by 2</h2>
                    <button onClick={this.clickHandler}>Clicked {clickCount} Times</button>
                </div>
            </div>
        )
    }
}

export default EventHandeling