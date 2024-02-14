import React, { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect");
  }, []);
  // Dependable array for making the call once.
  console.log("render");
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <h2>Name : {props.name}</h2>
      <h3>Location : Canada</h3>
      <h4>Contact : pururana24@gmail.com</h4>
    </div>
  );
};

export default User;
