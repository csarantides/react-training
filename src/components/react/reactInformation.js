import React from 'react'
import '../css/style.css'

function ReactInformation() {
    return (
        <div className="pageContent">
            <h1 className="pageTitle">React Information</h1>
            <br />
            <div>React is an Open Source Library for building user interfaces. React is not a framework.</div>
            <br />
            <div>React is not responsible for routing or building http requests.</div>
            <br />
            <div>React is a component based architecture.</div>
            <br />
            <div>class Components can add in properties through use of props like funtional components and return HTML (JSX).</div>
            <br />
            <div>Class components can additionally maintain a private internal state. So it can maintain information that is private to that component and use that information to describe the user interface.</div>
            <br />
            <div>Classes must have a render function within the class.</div>
            <br />
            <div className="subTitle">Class Components:</div>
            <ul>
                <li>They are feature rich.</li>
                <li>They can maintain their own private data also known as state.</li>
                <li>They can contain complex UI logic.</li>
                <li>They can provide lifecycle hooks.</li>
                <li>This is why they are called Stateful/ Smart/ Container components.</li>
            </ul>
            <br />
            <div className="subTitle">JSX:</div>
            <ul>
                <li>Javascript XML (JSX) - Extension to the JavaScript language syntax.</li>
                <li>Write XML-like code for elements and components.</li>
                <li>JSX tags have a tag name, attributesm and children.</li>
                <li>JSX is not necesity to write React applications</li>
                <li>JSX makes your react code simpler and elegent</li>
                <li>JSX ultimatley transpiles to pure JavaScript which is understood by the browsers.</li>
            </ul>
            <br />
            <pre>
                <code>{`
                    Comments: {/* */}
                    unless {} is already in play like:
                    const Hello = () => {
                        /* */
                    }
                `}</code>
            </pre>
            <div> then /* */ would work.</div>
            <br />
            <div>JSX differences:</div>
            <ul>
                <li>class -> className</li>
                <li>for -> htmlFor</li>
                <li>camelCase property naming convention</li>
                <li>onclick -> onClick</li>
                <li>tabindex -> tabIndex</li>
            </ul>
            <br />
            <div>Here's a link for some of the instances: https://github.com/facebook/react/issues/13525</div>
            <br />
            <div>Without JSX you can use Rect.createElement(), paramater 1: Element, Paramater 2: attributes, Paramater 2: data</div>
            <br />
            <div>JS: 'Hello' + this.state.parentName</div>
            <pre><code>{"ES6 Template Literals: `Hello ${this.state.parentName}`"}</code></pre>
            <div>Note: This is a feature in ES6 not React</div>
            <br />
        </div>
    )
}

export default ReactInformation