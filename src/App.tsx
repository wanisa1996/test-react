import { useState } from 'react';

interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
 
}

function MyButton({ title, disabled }: MyButtonProps) {

  
  return (
    <button disabled={disabled}>{title}</button>
    
  );
}

export default function MyApp() {
  const [count,setState]=useState(0)
  return (
    <div>
      <h1>your value is {count}</h1>
      <button onClick={()=>setState(count+1)}>click</button>
      
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}