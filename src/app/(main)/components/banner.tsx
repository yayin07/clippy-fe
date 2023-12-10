import React from "react";
import Banner from "../../../../public/images/banners/Banner.jpg";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="lg:h-80 pt-[72px] sm:pt-0 md:sticky top-0 inset-0  max-w-[1366px]  mx-auto">
      <Image src={Banner} alt="Banner" layout="responsive" />
    </div>
  );
};

export default HomeBanner;
