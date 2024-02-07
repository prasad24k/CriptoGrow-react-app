import React from 'react'
import { Circles } from "react-loader-spinner"
const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:"center", height:"100vh"}} >

<Circles
  height="80"
  width="80"
  color="orange"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    </div>
  )
}

export default Loader

