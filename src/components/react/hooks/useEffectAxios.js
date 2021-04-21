import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UseEffectAxios() {

    const [post, setPost] = useState([])
    const [error, setError] = useState('')
    const [postObj, setPostObj] = useState({id: 1, buttonID : 1})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postObj.buttonID}`)
        .then(response => {
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setPost({})
            setError('There was an error')
        })
    }, [postObj.buttonID])

    return (
        <div className="pageContent">
            <h1 className="pageTitle">useEffect Hook with Axios</h1>
            <div>React is a library for building user interfaces its in no way concerned with http.</div>
            <br />
            <div>How do we make ajax requests or API calls.</div>
            <br />
            <div>React doesnt have a particualr way to fetch or send data to the server. React doesnt even need to know there a server.</div>
            <br />
            <div>Props and State are used for this.</div>
            <br />
            <div>You need to make use an http libary, in this case we will use axios.</div>
            <br />
            <div>call npx create-react-app react-http, in order to create a new project.</div>
            <br />
            <div>Then in that new project run npm install axios</div>
            <br />
            <div>Utilised https://jsonplaceholder.typicode.com</div>
            <div>for testing</div>
            <div>import axios from 'axios'</div>
            <div>Axios is a promise based library so we can add then and catch blocks.</div>
            <br />
            <div>axios.get(url).then(request).catch(error)</div>
            <div>axios.post(url, this.post).then(request).catch(error)</div>
            <br />
            <div>Delete requests are pretty much the same.</div>
            <br />
            <div>How to fetch data from the API End Point, Look up SUspence in the future.</div>
            <br />
            <div>This is alot easier with useEffect, remember the empty dependancy array so you dont get an infinite loop.</div>
            <br />
            <h3>The following code displays data based on the id you searched for.</h3>
            <div className="codeEx">
                <h2 className="codeExTitle">Code Example:</h2>
                <hr />
                <div>
                    <div className="filePath">/src/App.js</div>
                    <pre>
                        <code>{`
    import React from 'react'
    import './App.css'
    import UseEffectAxios from './components/useEffectAxios'

    function App() {
        return (
        <div className="App">
            <UseEffectAxios />
        </div>
        );
    }

    export default App;
                        `}</code>
                    </pre>
                </div>
                <hr />
                <div>
                    <div className="filePath">/src/components/useEffectAxios.js</div>
                    <pre>
                        <code>{`
    import React, {useState, useEffect} from 'react'
    import axios from 'axios'

    function UseEffectAxios() {

        const [post, setPost] = useState([])
        const [error, setError] = useState('')
        const [postObj, setPostObj] = useState({id: 1, buttonID : 1})

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/${postObj.buttonID}')
            .then(response => {
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setPost({})
                setError('There was an error')
            })
        }, [postObj.buttonID])

        return (
            <div>
                <input value={postObj.id} onChange={e => setPostObj({...postObj, id: e.target.value})} />
                <button onClick={() => setPostObj({...postObj, buttonID: postObj.id})}>Check Post</button>
                <h3>
                    {post.id ? <div>{post.id} - {post.title}</div> : <div>No Data</div>}
                    {error}
                </h3>
            </div>
        )
    }
        
    export default UseEffectAxios
                        `}</code>
                    </pre>
                </div>
            </div>
            <br />
            <div className="codeDemo">
                <h2 className="codeDemoTitle">Code Demo:</h2>
                <input value={postObj.id} onChange={e => setPostObj({...postObj, id: e.target.value})} />
                <button onClick={() => setPostObj({...postObj, buttonID: postObj.id})}>Check Post</button>
                <h3>
                    {post.id ? <div>{post.id} - {post.title}</div> : <div>No Data</div>}
                    {error}
                </h3>
            </div>
        </div>
    )
}
 
 export default UseEffectAxios