import React from 'react'
import Banner from "../../../../public/images/banners/Banner.jpg";
import Image from 'next/image';
const HomeBanner = () => {
  return (
    <div className='h-80'>
      <Image src={Banner} alt="Banner" layout='responsive'/>
    </div>
  )
}

export default HomeBanner