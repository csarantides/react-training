import React, {Component} from 'react'
import '../css/style.css'

class ClassComponent extends Component {
    render() {
        return (
            <div className="pageContent">
                <h1 className="pageTitle">Class Component</h1>
                <div>Class Components can add in properties through use of props like funtional components and return HTML (JSX).</div>
                <br />
                <div>Class components can additionally maintain a private internal state. So it can maintain information that is private to that component and use that information to describe the user interface.</div>
                <br />
                <div>Classes must have a render function within the class.</div>
                <br />
                <div className="subTitle">Functional Component:</div>
                <ul>
                    <li>They are feature rich.</li>
                    <li>They can maintain their own private data also known as state.</li>
                    <li>They can contain complex UI logic</li>
                    <li>They can provide lifecycle hooks.</li>
                    <li>This is why they are called Stateful/ Smart/ Container components.</li>
                </ul>
                <h3>The following code example displays the data within a class component</h3>
                <div className="codeEx">
                    <h2 className="codeExTitle">Code Example:</h2>
                    <hr />
                    <div>
                        <div className="filePath">/src/App.js</div>
                        <pre>
                            <code>{`
    import React from 'react';
    import './App.css';
    import ClassComponent from './components/ClassComponent'

    function App() {
        return (
            <div className="App">
                <ClassComponent />
            </div>
        );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/classComponent.js</div>
                        <pre>
                            <code>{`
    import React, { Component } from 'react'
    
    class ClassComponent extends Component {
        render() {
            return (
                <div>
                    This is a Class Component
                </div>
            )
        }
    }
    
    export default ClassComponent
                            `}</code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className="codeDemo">
                    <h2 className="codeDemoTitle">Code Demo:</h2>
                    <h1>This is a class component</h1>
                </div>
            </div>
        )
    }
}

export default ClassComponent