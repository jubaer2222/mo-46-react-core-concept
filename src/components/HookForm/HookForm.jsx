import React from 'react';
import useInputField from '../hooks/useInputField';

const HookForm = () => {

 const [name,nameOnChange] = useInputField('');
 const [email,emailOnChange] = useInputField('');


  const handleSubmit = e =>{
    e.preventDefault();
    console.log('submit',name ,email);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />
        <br />
        <input defaultValue ={email} type="email" name="email" placeholder='Email' onChange={emailOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;