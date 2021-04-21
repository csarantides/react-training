import React from 'react'
import '../../css/style.css'

function HooksInformation() {
    return (
        <div className="pageContent">
            <h1 className="pageTitle">Information on Hooks</h1>
            <div className="subTitle">Hooks were introduced in React Version 16.7.0-alpha</div>
            <br />
            <div className="subTitle">Hooks are a feature proposal that lets you use state and other React features without writing a class.</div>
            <ul>
                <li>No breaking changes</li>
                <li>Completly opt-in and 100% backwords compatablile.</li>
            </ul>
            <br />
            <div className="subTitle">What are Hooks:</div>
            <ul>
                <li>Hooks were introduced as an addition in React version 16.8 which allows you to use React features without having to write a class, Ex: State.</li>
                <li>Hooks don't work inside classes.</li>
            </ul>
            <br />
            <div className="subTitle">Rules of Hooks:</div>
            <ol>
                <li>
                    <div className="subTitle">Only call Hooks at the top level</div>
                    <ul>
                        <li>Don't call Hooks inside loops, conditions, or nested functions</li>
                    </ul>
                </li>
                <li>
                    <div className="subTitle">Only call Hooks from React Functions</div>
                    <ul>
                        <li>Call them from within React functional components and not just any regular JavaScript function</li>
                    </ul>
                </li>
            </ol>
            <br />
            <div className="subTitle">Why use Hooks:</div>
            <ol>
                <li>
                    <div className="subTitle">You don't have to worry about:</div>
                    <ul>
                        <li>Understand how this keyword works in Javascript</li>
                        <li>Rememeber to bind event handlers in class components</li>
                        <li>Classes don't minify very well and make hot reloading very unreliable</li>
                        <li>There is no particular way to reuse stateful component logic.</li>
                        <li>Higher Order Components (HOC) and render props patterns do address the problem</li>
                        <li>Makes the code harder to follow</li>
                        <li>There is a need to share stateful logic in a better way.</li>
                        <li>Create components for complex scinarios such as data fetching and subscribing to events</li>
                        <li>Related code is not organized in one place.</li>
                        <li>Ex: Date fetching - In componentDidMount and componentDidUpdate</li>
                        <li>Ex: Event Listeners - In componentDidMount and componentWillUnmount</li>
                        <li>Because of stateful logic - Cannot create components into smaller ones</li>
                    </ul>
                </li>
            </ol>
            <br />
            <div className="subTitle">Noteworthy Points:</div>
            <ul>
                <li>React version 16.8 or higher is required for Hooks</li>
                <li>Completly Opt In</li>
                <li>Hooks don't contain any breaking changes and the release is 100% backwards compatable</li>
                <li>Classes won't be removed from React</li>
                <li>Can't use Hooks inside a class component</li>
                <li>Hooks don't replace your existing knowledge of React Concepts</li>
                <li>Instead, Hooks provide a more direct API to the React concelpts you already know.</li>
            </ul>
        </div>
    )
}

export default HooksInformation