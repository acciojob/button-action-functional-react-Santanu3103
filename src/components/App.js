import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [txt,setText]= useState("");
  const [id,setId]=useState("click");
  return (
    <div id="main">
     <button id={id}
     onClick={()=>{setText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");setId("para")}}>click</button>
  <p>{txt}</p>
    </div>
  );
}


export default App;
