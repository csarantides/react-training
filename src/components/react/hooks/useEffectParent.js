import React, {useState, useEffect} from 'react'
import UseEffect from './useEffect'
import '../../css/style.css'

function UseEffectParent() {

    const [disp, setDisp] = useState(true)
    const [dispMsg, setDispMsg] = useState('Unmount')

    useEffect(() => {
        setDispMsg(disp ? 'Unmount' : 'Mount')
    }, [disp])

    return (
        <div className="pageContent">
            <h1 className="pageTitle">useEffect Hook</h1>
            <div>class components have side effects like updating DOM and fetching data from an API end point, you had to make use of the lifeCycle methods.</div>
            <br />
            <pre><code>{`import React, { useEffect } from 'react' - Replacement for Lifecycle Methods`}</code></pre>
            <br />
            <div className="subTitle">useEffect:</div>
            <ul>
                <li>The Effect Hook lets you perform side effects in functional components</li>
                <li>It is a close replacement for componentDidMount, componentDidUpdate and componentWillUpdate</li>
            </ul>
            <br />
            <div>When we useEffect hook we are requesting React to execute a function that is passed as a paramater everytime the component renders. Bassically works like combination of Life Cycle Methods: componentDidMount and componentDidUpdate.</div>
            <br />
            <div className="subTitle">useEffect Hook:</div>
            <ol>
                <li>useEffect runs after every render</li>
                <li>It is placed inside the component, so we can easily access the components state and props.</li>
            </ol>
            <br />
            <div className="subTitle">useEffect Paramaters:</div>
            <ol>
                <li>Paramater 1 - call</li>
                <li>Paramater 2 - dependancy array</li>
            </ol>
            <br />
            <div>Dependancy Array should be thought of as a way to let React know about everything the effect must watch for changes.</div>
            <br />
            <div>when you supply an empty dependancy list make sure you really dont have dependancies, with the above example count should have been added to the second paramater of useEffect which fixes the issue.</div>
            <br />
            <div>Calling multple useEffects always seperate them with the usestates.</div>
            <br />
            <div>You can mimic a componentDidUnmount with a return</div>
            <pre>
                <code>{`
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])
                    `}              
                </code>
            </pre>
            <div>vs</div>
            <pre>
                <code>{`
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
        console.log('Component unmounting code');
        window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
                `}</code>
            </pre>
            <h3>The following code displays your x and y positions while moving the mouse around and has counter on it that continues to count until the unmount button is clicked on and this will also remove you x and py postion display. You can click the mount button to start it over.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import './App.css'
    import UseEffectParent from './components/UseEffectParent'

    function App() {
        return (
            <div className="App">
                <UseEffectParent />
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useEffect.js</div>
                    <pre>
                        <code>{`
    import React, {useState, useEffect} from 'react'

    function UseEffect() {

        const [posX, setPosX] = useState(0)
        const [posY, setPosY] = useState(0)
        const [count, setCount] = useState(0)

        const posFunc = e => {
            setPosX(e.clientX)
            setPosY(e.clientY)
        }

        const tick = () => {
            setCount(prevCount => prevCount + 1)
        }

        useEffect(() => {
            window.addEventListener('mouseover', posFunc)
            const timeInterval = setInterval(tick,1000)
            return () => {
                window.removeEventListener('mouseover', posFunc)
                clearInterval(timeInterval)
                alert('Unmount')
            }
        }, [])

        return (
                <div>
                    <h3>{count}</h3>
                    X: {posX}, Y: {posY}
                </div>
            ) 
        }

    export default UseEffect
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useEffectParent.js</div>
                    <pre>
                        <code>{`
    import React, {useState, useEffect} from 'react'
    import UseEffect from './useEffect'

    function UseEffectParent() {

        const [disp, setDisp] = useState(true)
        const [dispMsg, setDispMsg] = useState('Unmount')

        useEffect(() => {
            setDispMsg(disp ? 'Unmount' : 'Mount')
        }, [disp])

        return (
            <div>
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <button onClick={() => setDisp(!disp)}>{dispMsg}</button>
                {disp && <UseEffect />}
            </div>
        )
    }

    export default UseEffectParent
                        `}</code>
                    </pre>
                </div>
            </div>
            
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <button onClick={() => setDisp(!disp)}>{dispMsg}</button>
                {disp && <UseEffect />}
            </div>
        </div>
    )
}

export default UseEffectParent