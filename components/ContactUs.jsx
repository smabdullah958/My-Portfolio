"use client"
 import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { FaPhone, FaEnvelope} from "react-icons/fa";

const ContactUs = () => {
  
   useEffect(() => {
     Aos.init({ duration: 150 });
   }, []);

  let [Submitting,SetSubmitting]=useState(null);
  const [result, setResult] =useState("");
  let [Data,SetData]=useState({
   access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
    UserName:"",
    Email:"",
    Message:"",
  })

  let HandleValues=((e)=>{
 SetData({...Data,[e.target.name]:e.target.value})
console.log(Data)
})

let HandleClick=async()=>{

  if(!Data.UserName || !Data.Email || !Data.Message){
    SetSubmitting(true)
    return;
  }
SetSubmitting(false)
setResult("Sending...")
let response=await fetch("https://api.web3forms.com/submit",
 { method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Data)
 });
     const data = await response.json();
if(data.success){
SetSubmitting(null)
  SetData({
    access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
    UserName:"",
    Email:"",
    Message:"",
  })
}
}

  return (
    <div
    data-aos="fade-down"
    id="Contact" className='bg-gray-800 '>
    <h1  className='lg:text-4xl text-3xl pt-5 pb-8 sm:pt-10  text-center font-bold text-gray-100 '>Contact Me</h1>
    <div  className='grid grid-cols-1 md:grid-cols-2 items-center justify-center  2xl:py-14  sm:px-16 px-10   md:pt-0 text-gray-100 text-xl '>
        <form onSubmit={(e)=>e.preventDefault()} className='order-1 md:order-2  md:mt-5 grid gap-4 md:mx-10 xl:mx-20'>
          <input type='text' name='UserName' value={Data.UserName} onChange={HandleValues} required placeholder='UserName' className='w-full lg:w-[30vw] p-2 border border-gray-600 rounded-md mb-3'  />
          
          <input type="email" name='Email' value={Data.Email} onChange={HandleValues} required 
          placeholder='Email' className='w-full lg:w-[30vw] p-2 border border-gray-600 rounded-md mb-3'/>  
           
          <textarea cols={40} rows={40} name='Message' value={Data.Message} required 
          onChange={HandleValues} placeholder='Message' className='mb-3 w-full lg:w-[30vw] p-2 border border-gray-900 rounded-md h-32'/>  
          <button disabled={Submitting===false}  
          className={`w-full lg:w-[30vw]   p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md mb-5 transition duration-300 ease-in-out ${Submitting===false ? "opacity-20 cursor-not-allowed" : ""}`}
           onClick={HandleClick}>{Submitting===false ? "Sending..." :"Send Message"}</button>
        </form>
        {/* Contact Info Section */}
        <div className='mb-5 md:mb-0'>
          <h2 className='text-xl md:text-2xl text-justify pb-5 sm:pb-10  md:pb-20 font-bold text-gray-100'>
              Let’s Build Something Great Together
            </h2>
          <div className='text-sm font-bold  lg:w-[30vw] flex flex-col justify-start text-justify'>

            

            <p className='text-lg  mb-5 font-bold text-gray-100 text-justify'>
              Feel free to reach out for collaborations, business , projects, or consultations.
            </p>

            <p className='flex items-center gap-3 mb-2'>
              <FaPhone className='text-gray-600' /> 
              03158239364
            </p>

            <p className='flex items-center gap-3 mb-2'>
              <FaEnvelope className='text-gray-600' />
              smabdullah958@gmail.com
            </p>
          </div>
        </div>
</div>
</div>
  )
}

export default ContactUs