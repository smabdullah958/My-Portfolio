"use client"
import axios from 'axios'
import React, { useState } from 'react'



const ContactUs = () => {

let [FormData,SetFormData]=useState({
   access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
  name:"",
  email:"",
  message:""
})

let [Submit,SetSubmit]=useState(false)

let CheckForm=!FormData.name||!FormData.email||!FormData.message

let SubmitData=async()=>{
  if(CheckForm){
      console.log("all fields must be require")
      return 
    }
  try{
    
    let response=await axios.post("https://api.web3forms.com/submit",FormData)
    if(response.data.success){
      SetSubmit(true)
      setTimeout(() => {
        SetFormData({
      access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
        name:"",
        email:"",
        message:""
      })
      SetSubmit(false)
      }, 2000);
    }
  }
  catch(error){
    console.log("internal eror bro ",error)
  }
}

let HandleFields=(e)=>{
      SetFormData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
}


  return (
    <div id="Contact"
       data-aos="zoom-in"
      data-aos-duration="500"
     className='bg-gray-800 min-h-[100vh]  text-[#ece3e3] flex flex-col py-10  justify-center items-center '>
      
      <h1 className='text-[#ece3e3] font-bold text-4xl  '>Contact Me</h1>
        <form onSubmit={(e)=>e.preventDefault()} className=' flex flex-col justify-center pt-10 items-center gap-10'>
        <input type="text" placeholder='name'
        onChange={HandleFields}
        name='name'
        value={FormData.name}
         className='border-2 border-white hover:border-blue-400 duration-300 transition-all  p-3
          rounded-xl w-[70%]' required/>

        <input type="email" placeholder='Email'
        value={FormData.email}
        name='email'
        onChange={HandleFields}
         className='border-2 border-white hover:border-blue-400 duration-300 transition-all  p-3 rounded-xl 
         w-[70%]' required/>

        <textarea rows={100} cols={100} placeholder='Your Message...'
          onChange={HandleFields}
          name='message'
          value={FormData.message}
           className='border-2 border-white hover:border-blue-400 duration-300 transition-all  p-3 rounded-xl
            w-[70%] h-48' required />

        <button onClick={SubmitData} 
        disabled={Submit}
         className={`  border-2 border-blue-400 px-4 py-2 rounded-2xl shadow-md  ${Submit ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer hover:shadow-blue-100"}`} >
         {Submit?"Messsage Send Successfully":"Submit"}</button>
    </form>
     
    </div>
  )
}

export default ContactUs
