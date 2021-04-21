import React from 'react'
import UseContextB from './useContextB'

function UseContextA() {
    return (
        <div className="pageContent">
            <h1 className="pageTitle">useContext Hook</h1>
            <div>Context: Provides a way to pass data through the component tree without having to pass down manually every level.</div>
            <br />
            <pre><code>{`import React, { useContext } from 'react' - Replacement for Context`}</code></pre>
            <br />
            <div className="subField">3 Steps:</div>
            <ol>
                <li>Create the Context</li>
                <li>Create the Provider</li>
                <li>Consume with the Consumer</li>
            </ol>
            <br />
            <div>Old way to call Cunsumer Context Data:</div>
            <pre>
                <code>{`
    return (
        <div>
            <UserConsumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>{user} - {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
                `}</code>
            </pre>
            <br />
            <div>New way to call Cunsumer Context Data:</div>
            <br />
            <div>const user = useContext(UserContext)</div>
            <div>const channel = useContext(ChannelContext)</div>
            <br />
            <pre>
                <code>{`
    return (
        <div>
            {user} - {channel}
        </div>
    )
                `}</code>
            </pre>
            <h3>The following code takes prompts and through the use of useContext moves them down to components lower within the ancestor chain.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React, {createContext} from 'react'
    import './App.css'
    import UseContextA from './components/useContextA'

    export const NameContext = createContext()
    const NameProvider = NameContext.Provider
    export const AgeContext = createContext()
    const AgeProvider = AgeContext.Provider

    function App() {
        return (
            <div className="App">
                <NameProvider value={'Chris Sarantides'}>
                    <AgeProvider value={'32'}>
                        <HookComponentA />
                    </AgeProvider>
                </NameProvider>
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useContextA.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import UseContextB from './useContextB'

    function UseContextA() {
        return (
            <div>
                <UseContextB />
            </div>
        )
    }

    export default UseContextA
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useContextB.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import UseContextC from './useContextC'

    function UseContextB() {
        return <UseContextC />
    }

    export default UseContextB
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useContextC.js</div>
                    <pre>
                        <code>{`
    import React, {useContext} from 'react'
    import {NameContext, AgeContext} from '../App'

    function UseContextC() {
        const name = useContext(NameContext)
        const age = useContext(AgeContext)
        return <div>My name is {name} and my age is {age} years old</div>
    }

    export default UseContextC
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <UseContextB />
            </div>
        </div>
    )
}

export default UseContextA