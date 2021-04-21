import React, {useState, useCallback } from 'react'
import UseCallbackCount from './useCallbackCount'
import UseCallbackButton from './useCallbackButton'
import UseCallbackTitle from './useCallbackTitle'

function UseCallbackParent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div className="pageContent">
            <h1 className="pageTitle">useCallback Hook</h1>
            <div>useCallback is used for performance optimization.</div>
            <br />
            <pre><code>import React, { useCallback } from 'react' - Caches the provided function instance itself</code></pre>
            <div>useCallback: caches the provided function instance itself</div>
            <br />
            <div>useCallback Hook: It is a hook that will return a memorized version of the callback function that only changes if one of the dependancies has been changed. So it bassically caches.</div>
            <br />
            <div>Why do we need it: It is usefule when passing callbacks to optimized child components that rely on refernce equality to prevent unnecesary renders.</div>
            <br />
            <div>Now the memos do help but note when the sallary button is pushed the logs youd expect are added but the age log is as well. This is also seen when the age button is clicked, the logs you expect show up as well as the sallary button log. This is due to both the</div>
            <pre>
                <code>{`
    const incrementAge = () => {
        setAge(age + 1)
    }
                `}</code>
            </pre>
            <br />
            <pre>
                <code>{`
    const incrementSalary = () => {
        setSalary(salary + 1000)
    }
                `}</code>
            </pre>
            <br />
            <div>functions being called in the ParentComponent. Since these functions are being rerendered each time, a way we can deal with them is the useCallback hook.</div>
            <br />
            <div>Don't use it too much: https://kentcdodds.com/blog/usememo-and-usecallback</div>
            <h3>The following code lets you add to the data based on the button that is clicked on.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react';
    import './App.css';
    import UseCallbackParent from './components/useCallbackParent'

    function App() {
        return (
            <div className="App">
                <UseCallbackParent />
            </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useCallbackButton.js</div>
                    <pre>
                        <code>{`
    import React, {memo} from 'react'

    function UseCallbackButton({handleClick, children}) {
        console.log('Rendering Button - ', children)
        return (
            <button onClick={handleClick}>
                {children}
            </button>
        )
    }

    export default memo(UseCallbackButton)
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useCallbackCount.js</div>
                    <pre>
                        <code>{`
    import React, { memo } from 'react'

    function UseCallbackCount({text,count}) {
        console.log('Rendering Count')
        return <div>{text} - {count}</div>
    }

    export default memo(UseCallbackCount)
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useCallbackTitle.js</div>
                    <pre>
                        <code>{`
    import React, { memo } from 'react'
    
    function UseCallbackTitle() {
        console.log('Rendering Title')
        return (
            <h2>
                useCallback Hook
            </h2>
        )
    }

    export default memo(UseCallbackTitle)
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useCallbackParent.js</div>
                    <pre>
                        <code>{`
    import React, {useState, useCallback } from 'react'
    import UseCallbackCount from './useCallbackCount'
    import UseCallbackButton from './useCallbackButton'
    import UseCallbackTitle from './useCallbackTitle'

    function UseCallbackParent() {

        const [age, setAge] = useState(25)
        const [salary, setSalary] = useState(50000)

        const incrementAge = useCallback(() => {
            setAge(age + 1)
        }, [age])

        const incrementSalary = useCallback(() => {
            setSalary(salary + 1000)
        }, [salary])

        return (
            <div>
                <UseCallbackTitle />
                <UseCallbackCount text="Age" count={age} />
                <UseCallbackButton handleClick={incrementAge}>Increment Age</UseCallbackButton>
                <UseCallbackCount text="Salary" count={salary} />
                <UseCallbackButton handleClick={incrementSalary}>Increment Salary</UseCallbackButton>
            </div>
        )

    }

    export default UseCallbackParent
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <UseCallbackTitle />
                <UseCallbackCount text="Age" count={age} />
                <UseCallbackButton handleClick={incrementAge}>Increment Age</UseCallbackButton>
                <UseCallbackCount text="Salary" count={salary} />
                <UseCallbackButton handleClick={incrementSalary}>Increment Salary</UseCallbackButton>
            </div>
        </div>
    )

}

export default UseCallbackParent