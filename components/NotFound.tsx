import React from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


function NotFound() {

    const style: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      userSelect: "none",
      backgroundColor: "#554971",
      color: "#fff",
    };

    const navigate = useNavigate()

    useEffect(()=>{
    setTimeout(()=>{
        navigate(-1)
    },1000)
    },[])

  return (
    <div style={style}>
      <div>
        <h1>Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound