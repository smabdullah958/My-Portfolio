// "use client"
// import axios from 'axios'
// import React, { useState } from 'react'



// const ContactUs = () => {

// let [FormData,SetFormData]=useState({
//    access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
//   name:"",
//   email:"",
//   message:""
// })
// let [loading,setloading]=useState(false)
// let [Submit,SetSubmit]=useState(false)

// let CheckForm=!FormData.name||!FormData.email||!FormData.message

// let SubmitData=async()=>{
//   if(CheckForm){
//       console.log("all fields must be require")
//       return 
//     }
//   try{
//   setloading(true)  
//     let response=await axios.post("https://api.web3forms.com/submit",FormData)
//     if(response.data.success){
//       setloading(false)
//       SetSubmit(true)
//       setTimeout(() => {
//         SetFormData({
//       access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
//         name:"",
//         email:"",
//         message:""
//       })
//       SetSubmit(false)
//       }, 1000);
//     }
//   }
//   catch(error){
//     console.log("internal eror bro ",error)
//   }
// }

// let HandleFields=(e)=>{
//       SetFormData((prev)=>({
//         ...prev,
//         [e.target.name]:e.target.value
//       }))
// }


//   return (
//     <div  id="Contact"
//     className=' w-full h-full 2xl:p-10  bg-gray-800   text-[#ece3e3]'>
//     <div 
//          data-aos="fade-right"
//        data-aos-delay="100"      
//        data-aos-duration="500"
//      className=' flex flex-col py-10  justify-center items-center '>
//       <h1 className='text-[#ece3e3] font-bold text-4xl sm:pt '>Contact Me</h1>
//         <form onSubmit={(e)=>e.preventDefault()} className=' flex flex-col justify-center pt-10 items-center gap-10'>
//         <input type="text" placeholder='name'
//         onChange={HandleFields}
//         name='name'
//         value={FormData.name}
//          className='border-2 border-white hover:border-blue-400 duration-300 transition-all  p-3
//           rounded-xl w-[70%]' required/>

//         <input type="email" placeholder='Email'
//         value={FormData.email}
//         name='email'
//         onChange={HandleFields}
//          className='border-2 border-white hover:border-blue-400 duration-300 transition-all  p-3 rounded-xl 
//          w-[70%]' required/>

//         <textarea rows={100} cols={100} placeholder='Your Message...'
//           onChange={HandleFields}
//           name='message'
//           value={FormData.message}
//            className='border-2 border-white hover:border-blue-400 duration-300 transition-all  p-3 rounded-xl
//             w-[70%] h-48' required />

//         <button onClick={SubmitData} 
//         disabled={Submit}
//          className={`  border-2 border-blue-400 px-4 py-2 rounded-2xl shadow-md  ${Submit||loading ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer hover:shadow-blue-100"}`} >
//          {loading ?<span className='opacity-30'> loading .. </span>:
//           Submit ? "Messsage Send Successfully" : "Submit"}</button>
//     </form>
//      </div>
//     </div>
//   )
// }

// export default ContactUs







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
    <h1  className='lg:text-4xl text-3xl pt-5 pb-8 sm:pt-10  text-center font-bold text-gray-100 '>Contact Us</h1>
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