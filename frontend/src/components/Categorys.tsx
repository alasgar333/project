import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store';
import { categoryFail, categoryRequest, categorySuccess } from '../hooks/actions/ProductAction';
import { BASE_URL } from '../configUrl';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

function Categorys() {
  
  const dispact = useDispatch();
  const {categorys, error, loading} =useAppSelector((state)=>state.categorys);

  useEffect(()=>{
    dispact(categoryRequest());

    fetch(BASE_URL+"/category/select/")
      .then((reponse)=>reponse.json())
      .then((data)=>dispact(categorySuccess(data)))
      .catch((error)=>dispact(categoryFail(error)))
      

  },[dispact]);

  


  return (

    
    <div>

<h1>Cateqoriayaar</h1>
    {loading&&<LoadingSpinner/>}
    {error&&<ErrorMessage errorMessage={error.message}></ErrorMessage>}


<ul>
{categorys.map((categorys)=>

  <li key={categorys.id}>
    {categorys.title}
  </li>
)}

</ul>
<div className="container pb-16 pt-8">
    <div className="grid-cols-2 mb-6">
      <span className="text-3xl md:text-4xl font-medium   font-bold mb-6 text-primary">Vet Market  kategoriyalar</span>
      <span className="text-xl float-right text-primary font-bold"><a href="#" className="">Keçid et <i className='fa-solid fa-angles-right'></i> </a></span>
</div>
<div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-3">


    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/categorys/aksesuar.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Aksesuar</a>


    </div>

    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/categorys/suvenir.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Suvenir</a>


    </div>
  
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/categorys/xalca.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Xalçalar</a>


    </div>
    
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/categorys/geyim.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Geyim</a>


    </div>
   
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/categorys/qidaİcki.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Qida və içkilər</a>


    </div>
   
</div>

</div>
    </div>
  )
}

export default Categorys