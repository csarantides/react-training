
import React, { Component } from 'react'
import '../css/style.css'
import styled from 'styled-components'

class StyleSheet extends Component {

    render() {
        
        const internalStyle = {
            color:'blue'
        }

        const StyledComponent = styled.h4`
            color:orange
        `
            
        return (
            <div className="pageContent">
                <h1 className="pageTitle">Style</h1>
                <div>Keep in mind that while id for css stays the same, class is a reserver word so className is used instead.</div>
                <br />
                <div className="subTitle">Style React Components:</div>
                <ol>
                    <li>Inline Styling</li>
                    <pre>
                        <code>{`
    const internalStyle = {
        color:'blue'
    }
    <h1 style={{color:'red'}}>Inline Styles</h1>
                        `}</code>
                    </pre>
                    <li>Internal styling</li>
                    <pre>
                        <code>{`
    const InlineText = { color:'blue', backgroundColor: '#fff', border: '1px solid #000', marginLeft: '25%', marginRight: '25%' }
    <h1 style={InlineText}>Inline Stylesheet</h1>
                        `}</code>
                    </pre>
                    <li>External styling</li>
                    <div>Comes from a seperate file stylesheet</div>
                    <li>Styled Components</li>
                    <pre>
                        <code>{`
    npm install --save styled-components
    import styled from 'styled-components'
    const TextStyledComponent = styled.h2' color: purple; background-color: grey;'
    <TextStyledComponent>Stylesheet</TextStyledComponent>
                        `}</code>
                    </pre>
                </ol>
                <h3>The following code styles the text</h3>
                <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react';
    import './App.css';
    import StyleSheet from './components/style'

    function App() {
        return (
            <div className="App">
                <StyleSheet />
            </div>
        );
    }

    export default App;
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/css/style.js</div>
                        <pre>
                            <code>{`
    .green {
        color:green
    }
                            `}</code>
                        </pre>
                    </div>
                    <hr />
                    <div>
                        <div className="filePath">/src/components/style.js</div>
                        <pre>
                            <code>{`

    import React, { Component } from 'react'
    import '../css/style.css'
    import styled from 'styled-components'

    class StyleSheet extends Component {

        render() {
            
            const internalStyle = {
                color:'blue'
            }

            const StyledComponent = styled.h4'
                color:orange
            '
                
            return (
                <div>
                    <h1 style={{color:'red'}}>Inline Styles</h1>
                    <h2 style={internalStyle}>Internal Style</h2>
                    <h3 className="green">Extenal Style</h3>
                    <StyledComponent>Styled Component</StyledComponent>
                </div>
            )
        }
    }
    
    export default StyleSheet
                            `}</code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className="codeDemo">
                    <h2 className="codeDemoTitle">Code Demo:</h2>
                    <h1 style={{color:'red'}}>Inline Styles</h1>
                    <h2 style={internalStyle}>Internal Style</h2>
                    <h3 className="green">Extenal Style</h3>
                    <StyledComponent>Styled Component</StyledComponent>
                </div>
            </div>
        )
    }
}
 
 export default StyleSheet