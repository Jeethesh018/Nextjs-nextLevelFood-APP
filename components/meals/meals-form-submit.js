"use client"

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () =>{
  const {pending}= useFormStatus();


  return <button disabled={pending}>{pending ? "Submitting..." : "shareMeal"}</button>
   
    
}
export default MealsFormSubmit;