import React,{useState} from 'react';

export default function Toggle(){

  const[toggle,setToggle]=useState(true);

if(toggle){
  return(
  <> 
     <div>Gursharan</div>
      <button onClick={()=>setToggle(!toggle)}>click</button>
  </>
  )
}
else{
  return(
    <> 
       <div>Singh</div>
        <button onClick={()=>setToggle(!toggle)}>click</button>
    </>
    )}
}