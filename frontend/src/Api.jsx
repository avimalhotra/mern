import { useState } from "react"
import { useEffect } from "react"

export default function Api(){

     const [data,setData]=useState({});

     useEffect(()=>{
          async function fetchData(){

               try{
                    const x= await fetch("http://localhost:3000");
                    const y=await x.json();
                    setData(prev=>({...prev,...y}));
               }
               catch(err){
                    setData(prev=>({...prev,error:"API not working"}));
               }
              
               
          }

          fetchData();

     },[]);

     return (
          <div className="API">
               <h2>API</h2>
               <p>{data.name}</p>
               <p>{data.message}</p>
               <p>{data.error}</p>
          </div>
     )
}