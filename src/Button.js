   import { useState } from "react";

  function Button() {
    const counter = 2;
    const arr1 = [1,2,3];
    const arr2 = [1,44,5];
    const finalArr = [...arr1,...arr2];
    console.log('final arr - ', finalArr);
    const [value, setValue] = useState(0);
    const arr = [];
    const handleOnClick = () => {
      
        setValue(arr);
    }

    return (
    <>
        <h1> VALUE - {value}</h1>
        <button onClick={handleOnClick}>Click me</button>

    </>
    );
}


export default Button;

