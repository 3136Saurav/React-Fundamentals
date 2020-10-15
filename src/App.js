import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import './appStyles.css';
import styles from './appStyles.module.css';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">

      {/* <Greet name="Bruce" heroName="Batman">
        <p>We have Children props as well</p>
      </Greet>
      <Greet name="Peter" heroName="Spiderman">
        <button>Action</button>
      </Greet> 
      <Greet name="Clark" heroName="Superman" />
        
      <Welcome name="Simon" heroName="Deadpool"/>
      <UserGreeting />  
      <NameList /> 
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Stylesheet primary={true} />
      <Inline /> 
      <Form />
      <LifecycleA />
      <FragmentDemo />
      <Table />
      <ParentComp />  
      <RefsDemo />  
      */}

      <FocusInput />

       { /*
        <ParentComponent />
        <EventBind />
        <FunctionClick />
        <ClassClick />
        <Counter />
        <Message name="Elon Musk" heroName="Tony Stark" /> */
      }
    </div>
  );
}

export default App;
