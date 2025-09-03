import React, { useState } from 'react';

const ControlledField = () => {
   
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const handlePasswordOnChange = e =>{
    console.log(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="email" name="email" id="" placeholder='email' required />
         <br />
         <input type="password" name="password" id="" placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} required />
         <br />
         <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;