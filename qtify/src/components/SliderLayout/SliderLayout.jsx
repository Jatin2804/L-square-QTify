import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Card from "../Card/Card"

// export default function Slider({data}) {
//   return (
//     <>
//       <Swiper
//         slidesPerView={7}
//         spaceBetween={30}
//         navigation={true} 
//         modules={[Navigation]}
//         className="mySwiper"
//         breakpoints={{

//             400: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             640: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//             },
//             800: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 5,
//               spaceBetween: 50,
//             },
//             1200: {
//               slidesPerView: 6,
//               spaceBetween: 50,
//             },
//             1400: {
//               slidesPerView: 7,
//               spaceBetween: 50,
//             },
//           }}
//       >
//         {
//             data.map((item) =>{
//                 return(
//                 <SwiperSlide key={item.id}>
//                  <Card value={item.id} cardData={item}/>
//              </SwiperSlide>
//             )})
//         }
        
//       </Swiper>
//     </>
//   );
// }

export default function Slider({ data }) {
  // console.log("Data passed to Slider:", data); // Log the data to see what's being passed

  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        400: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        800: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
        1200: { slidesPerView: 6, spaceBetween: 50 },
        1400: { slidesPerView: 7, spaceBetween: 50 },
      }}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card value={item.id} cardData={item} />
          </SwiperSlide>
        ))
      ) : (
        <p>No data available😢</p> // Show a message if there's no data
      )}
    </Swiper>
  );
}
