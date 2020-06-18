import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/Message'
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
function App()
{
 
  return (
    <div className="App">
      <ParentComp/>
      {/* <PureComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary = {true}/> */}
      {/* <UserGreeting/> */}
 {/* <NameList/> */}
  {/* <ParentComponent/>    */}
   {/* <EventBind/> */}
  
     {/* <Counter/>
      <FunctionClick/>*/}
  { /*   <Greet/> <ClassClick/> */ }
    {/*  <Welcome/> */}
    {/*<Greet name="anchaal" heroName="superwoman"> <p>this is me</p> </Greet>
    <Greet name="dash" heroName="spiderwoman"><button>click</button></Greet> 
    <Greet name="gudli" heroName="batwoman"/> 
    <Welcome name="gudli" heroName="batwoman"/> 
  <Welcome name="edi" heroName="madwoman"/> */}
    </div>
  );
}


export default App;
