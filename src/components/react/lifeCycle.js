import React from 'react'

function LifeCycle() {
    return (
        <div className="pageContent">
            <h1 className="pageTitle">Life Cycle</h1>
            <div>React provides us with built in methods that we can override at particular stages within the life cycle.</div>
            <br />
            <div className="subTitle">Lifecycle Methods:</div>
            <ol>
                <li>Mounting - Is called when an instance of a component is being created and inserted into the DOM. Methods: (constructor, static getDerivedStateFromProps, render and componentDidMount)</li>
                <li>Updating - Is called when a component is being re-rendered as a result of changes to either its props or state. Methods: (static getDirevedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate)</li>
                <li>Unmunting - Is called when a component is being removed from the DOM. Methods: (componentWillUnmount)</li>
                <li>Error Handling - Is called when there is an error durring rendering, in a lifecycle method, or in the constructor of any child component. Methods: (static getDirivedStateFromError and componentDidCatch)</li>
            </ol>
            <br />
            <div className="subTitle">Mounting Lifecycle Methods:</div>
            <ol>
                <li>constructor(props)</li>
                <ul>
                    <li>A special function that will get called whenever a new component is created</li>
                    <li>initialized state or binding the event handlers to the class instance</li>
                    <li>Dont cause side evffects. Ex: Do not make http requests from it</li>
                    <li>super(props) Directly overwrites this.state.</li>
                </ul>
                <li>static getDerivedStateFromProps(props,state)</li>
                <ul>
                    <li>Used rarley, but used when the state of the component depends on changes in the props overtime.</li>
                    <li>set the state, also cant use keyword this</li>
                    <li>Dont cause side evffects. Ex: Do not make http requests from it</li>
                </ul>
                <li>render()</li>
                <ul>
                    <li>only required method in a class component</li>
                    <li>read props & state and return JSX</li>
                    <li>Do not change the state or interact with DOM or make ajax calls</li>
                    <li>Children components lifecycle methods are also executed.</li>
                </ul>
                <li>componentDidMount()</li>
                <ul>
                    <li>Called only once in the lifecycle of an event component. It is invoked immediatly after a component and all its children components have been rendered to the DOM.</li>
                    <li>Cause side effects. EX. Interact with the DOM or perform any ajax calls to load data.</li>
                </ul>
            </ol>
            <br />
            <div className="subTitle">Updating Lifecycle Methods:</div>
            <ol>
                <li>static getDirivedStateFromProps(props,state)</li>
                <ul>
                    <li>Used rarley, but used when Method is called every time a component is re-rendered</li>
                    <li>set the state, also cant use keyword this</li>
                    <li>Dont cause side evffects. Ex: Do not make http requests from it</li>
                </ul>
                <li>shouldComponentUpdate(nextProps,nextState)</li>
                <ul>
                    <li>Dictates if the component should re-render or not, by default all class components will rerender whenever the props they receive or their state changes. This method can prevent that default behavier by returning false. Returns true or false on if they should be changed.</li>
                    <li>Used rarley, Performance Optimization</li>
                    <li>Do not cause side effects. Ex. HTTP requests Calling the setState Method.</li>
                </ul>
                <li>render()</li>
                <ul>
                    <li>Only required method</li>
                    <li>Read props and state and return JSX</li>
                    <li>Do not change state or interact with DOM or make ajax calls.</li>
                </ul>
                <li>getSnapshotBeforeUpdate(prevProps, prevState)</li>
                <ul>
                    <li>Used rarley, Called right before the changes from the virtual DOM are to be reflected in DOM</li>
                    <li>Capture some information from the DOM. Ex. you could read the users scroll position and use it after.</li>
                    <li>Method will either return null or return a value. Returned value will be passed as the third paramater to the next method.</li>
                </ul>
                <li>componentDidUpdate(prevProps, prevState, snapshot)</li>
                <ul>
                    <li>Called after the render is finished in the re-render cycles. It is called only once in the re-render prousess.</li>
                    <li>Cause Side effects.</li>
                </ul>
            </ol>
            <br />
            <div className="subTitle">Unmounting Phase Method</div>
            <ol>
                <li>Method is invoked imeteadly before a component is unmounted and destroyed.</li>
                <li>Cancelling any network requests, removing event handlers, canceling any subscriptions and also invalidation timers.</li>
                <li>DO not call the setState method. THis is due to the fact that the component will never rerender after it has been unmounted.</li>
            </ol>
            <br />
            <div className="subTitle">Error Handeling Phase Methods.</div>
            <ol>
                <li>static getDerivedStateFromError(error)</li>
                <li>componentDidCatch(error, info)</li>
                <ul>
                    <li>Both are calles when there is an error either durring rendering, in a lifecycle method, or in the constructor of any child component.</li>
                </ul>
            </ol>
            <h3 className="betterChoice">A much easier way to deal with some of these lifecycle methods is with <a href="/hooks/useEffect">useEffect</a></h3>
        </div>
    )
}

export default LifeCycle