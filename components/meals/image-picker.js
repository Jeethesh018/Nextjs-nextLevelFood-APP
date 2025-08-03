"use client"

import { useRef, useState } from "react"
import Styles from "./image-picker.module.css"
import Image from "next/image";

const ImagePicker= ({label,name}) =>{
    const [pickedImage,setPickedImage]= useState();
  const ref= useRef();

    const handleClick=()=>{
        ref.current.click();

    }


    const handleImageChange = (event) =>{
        const files = event.target.files[0];

        if(!files){
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () =>{
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(files)
    }

    return(
        <div className={Styles.picker}>
            <label htmlFor={name}>{label}</label>
                        <div className={Styles.controls}>
                            <div className={Styles.preview}>
                                {!pickedImage && <p>No image picked yet</p>}
                                {pickedImage && <Image src={pickedImage} alt="image selected by user" fill/>}
                            </div>
                            <input onChange={handleImageChange} className={Styles.input} ref={ref} type="file" id="image" accept="image/png, image/jpeg,image/jpg" name={name}/>
                       <button onClick={handleClick} className={Styles.button} type="button">Pick an image</button>
                        </div>
        </div>
    )

}
export default ImagePicker;