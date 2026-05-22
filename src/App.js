// import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect, useCallback,useRef } from "react";
import { Button,Table, Tag, Space,Input } from 'antd';

// import Content from './content/content';

function App() {
  const [n,setN] = useState(100);
  const [obj,setObj] = useState({});
  const [name, setName] = useState('dx');
  const [state, setState] = useState({
    username: '张三',
    age: 18
})
  const handleValidate = useCallback(()=>{
    // console.log(123)
  },[])
  const handleMaxRestoreUp = useCallback((e)=>{
    let reg = /[^\a-\z\A-\Z]/;
    let a = e.target.value
    console.log('handleMaxRestoreUp',e.key.replace(/[^\a-\z\A-\Z]/g,""))
    // console.log('handleMaxRestoreUp',reg.test(e.key))
  },[])


  useEffect(()=>{
    // handleTest();
    // getData({newapge:12,y:14});
  },[])
  return (
    <div className="App">
      <div className='wrap'>
        {/* <Table columns={columns} dataSource={data} /> */}
        {/* 1.GOLIVE VoP succesfully and Will investigate the root cause during SHP change 
            2.pay attention AWS/SHP/embargo any notify email
        */}
      </div>
      {/* <Button type="primary" onClick={handleClick}>Primary Button</Button> */}
      <Button type="primary">111111</Button>
      <Input onChange={handleValidate} onKeyUp={(event )=>{handleMaxRestoreUp(event)}} placeholder="Basic usage" />
    </div>
  );
}


export default App;
