import React from "react";
import "./style.css";
import Toggle from './Toggle';
import NewComp from './NewComp';
export default function App() {
let obj={
  name:"Honey",
  age:23
}
  return (
    <div>
<Toggle/>
<NewComp prop={obj}/>
    </div>
  );
}
