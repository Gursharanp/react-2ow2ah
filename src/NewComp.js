import React from 'react';

export default function NewComp(prop){
// console.log(prop)

return <>
<div>
  {prop.prop.name} {prop.prop.age}          
</div>
<input type='text'/>
</>

}