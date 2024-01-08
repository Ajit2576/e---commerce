import React, { useEffect, useState } from 'react'
import {scrollTop} from '../assets'


function ScrollTop() {

    const [scroll, setScroll] = useState();

    useEffect (() => {
        
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >= 150){
                setScroll(true);
            }else{
                setScroll(false)
            } 
        })
        
    },[])

    const handleScroll = () => {
        window.scrollTo(0,0)
        
    }
    
    const style = {
        scrollMain: {
            border: "1px solid #000",
            borderRadius: "50%",
            padding: "18px",
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            color: "#fff",
            backgroundColor: "black",
            cursor: "pointer",
            position: "fixed",
            bottom: "40px",
            zIndex: "9999",
            right: "25px"
        },
    }

  return (
   scroll && <div className="scrollMain" style={style.scrollMain} onClick={handleScroll}>
        <img src={scrollTop} style={{filter: "invert(1)"}} />
    </div>
  )
}

export default ScrollTop
