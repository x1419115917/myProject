// import logo from './logo.svg';
import './content.css';
import React, { createContext,useContext, useState,useEffect,useCallback } from "react";


function Content(props) {
  const { msg,changeCount } = props;
  const [n,setN] = useState(0)
  const [number,setNumber] = useState(10);
  const ggg = ()=> {
    // console.log('传过来的数据',msg)
    // setNumber(number+2)
  }
  useEffect(()=>{
    console.log(111111111);
    return () => {
      // console.log('componentWillUnmount ');
    };
  },[])

  return (
    <div className="App">
      {
        (()=>{
          console.log('render')
        })()
      }
      <p onClick={()=>changeCount(msg+10)}>向父组件传递数据</p>
      <p onClick={ggg}>这是content组件</p>
    </div>
  );
}


export default Content;
