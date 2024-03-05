import React, { useState } from 'react'

const Form = () => {

  const [details,setdetails]=useState({
    username:"",
    email:"",
    password:""
  })

  const [showusername,setusername] = useState(true);

  const handlechange=(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    setdetails((prev)=>{
      return {...prev,[name]:value}
    })
  }
  
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(details);
  }

  const showonpage=()=>{
    const data= details.username;
    setusername(data);
   
   
    // console.log(data)
  }
  // showonpage();

  return (
    <div className='flex justify-center'>
        <form onClick={handlesubmit} className='flex flex-col w-[15vw]  text-[2vw] font-sans'>
          <input type="text" placeholder='Username' name='username' onChange={handlechange}/>
          <input type="text" placeholder='Email' name='email' onChange={handlechange}/>
          <input type="text" placeholder='Password' name='password' onChange={handlechange}/>
          <button type='submit' className='bg-black text-white rounded-2xl' onClick={showonpage }>Submit</button>
      
        </form>
        <h1 onChange={showonpage}>here will be the output{showusername && showusername}</h1>
        
    </div>
  )
}

export default Form