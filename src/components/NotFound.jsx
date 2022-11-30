import React from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


function NotFound() {

    const navigate = useNavigate()

    useEffect(()=>{
    setTimeout(()=>{
        navigate(-1)
    },2000)
    },[])

  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}

export default NotFound