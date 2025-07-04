import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';

// import required modules
import { Pagination } from 'swiper/modules';

function TopProducts() {
  return (
    <div className='pb-8 pt-8 px-20 bg-slate-200'>
      <>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        
        



        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/cp-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Computer One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $100.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $150.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/shoes-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Shoes One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $200.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $350.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/dress-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Dress One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $120.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $170.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/mp-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/mp-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/mp-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/mp-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group rounded-xl bg-white shadow-lg overflow-hidden">
                            <div className="relative">
                                    <img src="img/product/mp-1.png" className="w-full" />

                              <div className="absolute inset-0 flex items-center justify-center text-xl
                                    text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>

                                    </a>

                                    <a href="view.html" className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                                        <i className="fa-solid fa-heart fa-xl"></i>

                                    </a>
                                </div>
                              </div>

                              <div className="pt-4 pb-3 px-4">

                                <a href="view.html">
                                    <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone One</h4> 
                                    
                                </a>


                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                                    <p className="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                                </div>

                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-500">
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>


                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(120)</div>



                                </div>
                               
                            
                               </div>
                               <a href="view.html" className="block w-full py-2 text-center text-white bg-primary border
                               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


                             </div>
        </SwiperSlide>
          

      </Swiper>
      </>
    </div>
  )
}

export default TopProducts