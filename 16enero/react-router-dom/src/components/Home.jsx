import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Home = () => {
  
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();
  
   
  const submit = (data) => {
    console.log(data)
    if(data.fruta == 'manzana' || data.fruta == 'Manzana'){
      navigate('/tecnologies')
  }else{
    if(data.fruta=== 'pera'){
      navigate('/projects')
    }else{
      if(data.fruta === 'uva') {
        navigate('/')
      }
    }
  }

  }
  
  return (
        <div>
           <h1>Bienvenidos</h1>
            <form onSubmit={handleSubmit(submit)}>
            <input placeholder='fruta' type="text" id="fruta" {...register("fruta")} required />
            <button>Upload</button>
            </form>
            
        </div>
    );
};

export default Home;