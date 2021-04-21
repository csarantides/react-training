import React, {createContext} from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from '../home'
import Error404 from '../error404'
import ReactInformation from '../react/reactInformation'
import FunctionalComponent from '../react/functionalComponent'
import ClassComponent from '../react/classComponent'
import Props from '../react/props'
import States from '../react/states'
import Destructors from '../react/destructors'
import EventHandeling from '../react/eventHandeling'
import Conditional from '../react/conditional'
import Lists from '../react/lists'
import StyleSheet from '../react/style'
import LifeCycle from '../react/lifeCycle'
import HooksInformation from '../react/hooks/hooksInformation'
import UseState from '../react/hooks/useState'
import UseEffectParent from '../react/hooks/useEffectParent'
import UseEffectAxios from '../react/hooks/useEffectAxios'
import UseContextA from '../react/hooks/useContextA'
import UseReducer from '../react/hooks/useReducer'
import UseCallbackParent from '../react/hooks/useCallbackParent'
import UseMemo from '../react/hooks/useMemo'
import UseRef from '../react/hooks/useRef'
import CustomHookUse from '../react/hooks/customHookUse'

export const NameContext = createContext()
const NameProvider = NameContext.Provider
export const AgeContext = createContext()
const AgeProvider = AgeContext.Provider

function Navigation() {
    return (
      <div className="App">
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <h3>General Information</h3>
            <li><Link to="/reactInformation">React Information</Link></li>
            <li><Link to="/functionalComponent">Functional Components</Link></li>
            <li><Link to="/classComponent">Class Components</Link></li>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/states">States</Link></li>
            <li><Link to="/destructors">Destructors</Link></li>
            <li><Link to="/eventHandeling">Event Handeling</Link></li>
            <li><Link to="/conditional">Conditional</Link></li>
            <li><Link to="/lists">Lists</Link></li>
            <li><Link to="/style">Style</Link></li>
            <li><Link to="/lifeCycle">Life Cycle</Link></li>
            <h3>Hooks</h3>
            <li><Link to="/hooks/information">Information on Hooks</Link></li>
            <li><Link to="/hooks/useState">useState Hook</Link></li>
            <li><Link to="/hooks/useEffect">useEffect Hook</Link></li>
            <li><Link to="/hooks/useEffectAxios">useEffect Hook with Axios</Link></li>
            <li><Link to="/hooks/useContext">useContext Hook</Link></li>
            <li><Link to="/hooks/useReducer">useReducer Hook</Link></li>
            <li><Link to="/hooks/useCallback">useCallback Hook</Link></li>
            <li><Link to="/hooks/useMemo">useMemo Hook</Link></li>
            <li><Link to="/hooks/useRef">useRef Hook</Link></li>
            <li><Link to="/hooks/customHook">Custom Hook</Link></li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/reactInformation">
              <ReactInformation />
            </Route>
            <Route exact path="/functionalComponent">
              <FunctionalComponent />
            </Route>
            <Route exact path="/classComponent">
              <ClassComponent />
            </Route>
            <Route exact path="/props">
                <Props name="Chris Sarantides">
                    I have two kids
                </Props>
            </Route>
            <Route exact path="/states">
              <States />
            </Route>
            <Route exact path="/destructors">
                <Destructors name="Chris Sarantides" age="33" />
            </Route>
            <Route exact path="/eventHandeling">
              <EventHandeling />
            </Route>
            <Route exact path="/conditional">
              <Conditional />
            </Route>
            <Route exact path="/lists">
              <Lists />
            </Route>
            <Route exact path="/style">
              <StyleSheet />
            </Route>
            <Route exact path="/lifeCycle">
              <LifeCycle />
            </Route>
            <Route exact path="/hooks/information">
              <HooksInformation />
            </Route>
            <Route exact path="/hooks/useState">
              <UseState />
            </Route>
            <Route exact path="/hooks/useEffect">
              <UseEffectParent />
            </Route>
            <Route exact path="/hooks/useEffectAxios">
              <UseEffectAxios />
            </Route>
            <Route exact path="/hooks/useContext">
                <NameProvider value={'Chris Sarantides'}>
                    <AgeProvider value={'32'}>
                        <UseContextA />
                    </AgeProvider>
                </NameProvider>
            </Route>
            <Route exact path="/hooks/useReducer">
              <UseReducer />
            </Route>
            <Route exact path="/hooks/useCallback">
              <UseCallbackParent />
            </Route>
            <Route exact path="/hooks/useMemo">
              <UseMemo />
            </Route>
            <Route exact path="/hooks/useRef">
              <UseRef />
            </Route>
            <Route exact path="/hooks/customHook">
              <CustomHookUse />
            </Route>
            <Route exact path="/error404">
              <Error404 />
            </Route>
            <Redirect to="/error404" />
          </Switch>
        </Router>
      </div>
    );
  }

  export default Navigation