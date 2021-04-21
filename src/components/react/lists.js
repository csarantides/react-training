import React, {Component} from 'react'
 
class ListStructure extends Component {
    render() {
        const NameStructure = [
            {
                id: 1,
                name: 'Chris',
                age: 33
            },
            {
                id: 2,
                name: 'Sami',
                age: 33
            },
            {
                id: 3,
                name: 'Stafan',
                age: 4
            },
            {
                id: 4,
                name: 'Serenity',
                age: 1
            }
        ]
        const NameList = NameStructure.map(person => <li key={person.id}>{person.id} - {person.name} is {person.age} year(s) old.</li>)
        
        return (
            <div className="pageContent">
                <h1 className="pageTitle">Lists</h1>
                <div>Like vanilla Javascript map is a good way to utilise arrays and structures</div>
                <br />
                <div>Vanilla Javascript:</div>
                <div>var array1 = [1,2,3,4,5];</div>
                <pre><code>{`<code>const map1 = array1.map(x => (x * x))</div>`}</code></pre>
                <div>console.log(map1)</div>
                <div>-- result: [1, 4, 9, 16, 25]</div>
                <br />
                <div>Each item in a list rendered using the map operator should have a prop called key, and the value to that prop should be unique to that list.</div>
                <br />
                <div>Reacts version:</div>
                <pre><code>{`const NameList = NameArray.map(name => <li key={name}>{name}</li>)</div>`}</code></pre>
                <br />
                <div className="subTitle">Lists and Keys</div>
                <ol>
                    <li>A "key" is a special string attribute you need to include when creating lists of items</li>
                    <li>Keys give the elements a stable identity</li>
                    <li>Keys help React identify which items have changed, are added, or are removed.</li>
                    <li>Help in efficient update of the user interface</li>
                </ol>
                <br />
                <div>So if the array or structure are not unique or do not have an id you can create one.</div>
                <pre><code>{`const NameList = NameArray.map((name, index) => <li key={index}>{name}</li>)`}</code></pre>
                <br />
                <div className="subTitle">When to use index as a key?</div>
                <ol>
                    <li>The items in your list do not have a unique id.</li>
                    <li>The list is a static list and will not change.</li>
                    <li>The list will never be reordered or filtered.</li>
                </ol>
                <h3>The following code displays a structures data in text</h3>
                <div className="codeEx">
                    <h2 className="codeExTitle">Code Examples:</h2>
                    <hr />
                    <div>
                        <div className="filePath">/src/App.js</div>
                        <pre>
                            <code>{`
    import React from 'react';
    import './App.css';
    import Lists from './components/Lists'

    function App() {
        return (
            <div className="App">
            <Lists />
            </div>
        );
    }

    export default App;
                                `}</code>
                            </pre>
                        </div>
                        <hr />
                        <div>
                            <div className="filePath">/src/components/lists.js</div>
                            <pre>
                                <code>{`
    import React, {Component} from 'react'
    
    class ListStructure extends Component {
        render() {
            const NameStructure = [
                {
                    id: 1,
                    name: 'Chris',
                    age: 33
                },
                {
                    id: 2,
                    name: 'Sami',
                    age: 33
                },
                {
                    id: 3,
                    name: 'Stafan',
                    age: 4
                },
                {
                    id: 4,
                    name: 'Serenity',
                    age: 1
                }
            ]
            const NameList = NameStructure.map(person => <li key={person.id}>{person.id} - {person.name} is {person.age} year(s) old.</li>)
            
            return <ul>{NameList}</ul>
        }
    }
    
    export default ListStructure
                            `}</code>
                        </pre>
                    </div>
                </div>
                <br />
                <div className="codeDemo">
                    <h2 className="codeDemoTitle">Code Demo:</h2>
                    <ul>{NameList}</ul>
                </div>
            </div>
        )
    }
}
 
 export default ListStructure