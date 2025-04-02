'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({label,name,...props}){
   const [pickImage,setPickImage]= useState();
 const imgRef=   useRef();
    function handlyClick(){
    imgRef.current.click();
    }


function handlyOnChancge(event){
    const file=event.target.files[0];
    if(!file){
        return
    }
  const fileReader=  new FileReader()
  fileReader.onload=()=>{
    setPickImage(fileReader.result);
  }
  fileReader.readAsDataURL(file)
    }


return <div className={classes.picker}>
<label htmlFor={name}>{label}</label>
<div className={classes.controls}>
    <div className={classes.preview}>
      {!pickImage && <p>No image picked</p>}
      {pickImage && <Image src={pickImage} {...props} fill/>}
    </div>
 <input className={classes.inputt} type='file' accept='image/png , image/jpeg' 
 id={name} name={name}  ref={imgRef} onChange={handlyOnChancge}/>
 <button className={classes.button} type='button' onClick={handlyClick}>Pick an Image</button>
</div>
</div>
}