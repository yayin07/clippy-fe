"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import Picture from "../../../../public/images/items/Picture.jpg";
import Picture1 from "../../../../public/images/items/Picture1.jpg";
import Picture2 from "../../../../public/images/items/Picture2.jpg";
import Picture3 from "../../../../public/images/items/Picture3.png";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../../../public/images/user.png";
import Right from "../../../../public/images/right.png";
import { InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Item {
  id: number;
  title: string;
  images: any;
  seller: string;
  sellerImages: any;
  isLive: boolean;
  isTommorow: boolean;
  date: string;
}

export const itemsData: Item[] = [
  {
    id: 1,
    title: "Pinocchio, Disney 100",
    images: Picture3,
    seller: "Sony Pictures",
    sellerImages: Picture,
    isLive: true,
    isTommorow: false,
    date: "11/8/23",
  },
  {
    id: 2,
    title: "Paglaki ko gusto ko maging PORN STAR",
    images: Picture2,
    seller: "Team Payaman",
    sellerImages: User,
    isLive: true,
    isTommorow: false,
    date: "11/8/23",
  },
  {
    id: 3,
    title: "The Write Moment",
    images: Picture,
    seller: "ABSCBN",
    sellerImages: Picture,
    isLive: false,
    isTommorow: true,
    date: "Tomorrow - 10:46 AM ",
  },
  {
    id: 4,
    title: "Two Love You",
    images: Picture1,
    seller: "Viva",
    sellerImages: User,
    isLive: false,
    isTommorow: true,
    date: "11/8/23",
  },
  {
    id: 5,
    title: "Two Love You",
    images: Picture1,
    seller: "Vincentiments",
    sellerImages: Picture,
    isLive: false,
    isTommorow: true,
    date: "Today - 10 PM ",
  },
  {
    id: 6,
    title: "Ted Lasso",
    images: Picture2,
    seller: "bigboisfunkos",
    sellerImages: User,
    isLive: false,
    isTommorow: false,
    date: "11/28 - 10:30 PM ",
  },
  {
    id: 7,
    title: "Pinocchio, Disney 100",
    images: Picture,
    seller: "Disney Store",
    sellerImages: Picture,
    isLive: false,
    isTommorow: true,
    date: "11/28 - 10:30 PM ",
  },
  {
    id: 8,
    title: "1996 Kobe Bryant Upper Deck Hoops Dreams #58 Card",
    images: Picture2,
    seller: "Upper Deck ",
    sellerImages: User,
    isLive: false,
    isTommorow: true,
    date: "Tomorrow - 10 PM ",
  },
  {
    id: 9,
    title: "The Write Moment",
    images: Picture,
    seller: "Disney Store",
    sellerImages: Picture,
    isLive: false,
    isTommorow: true,
    date: "11/28 - 10:30 PM ",
  },
  {
    id: 10,
    title: "Paglaki ko gusto ko maging PORN STAR",
    images: Picture2,
    seller: "Upper Deck ",
    sellerImages: User,
    isLive: false,
    isTommorow: true,
    date: "Tomorrow - 10 PM ",
  },
  {
    id: 11,
    title: "Kaka",
    images: Picture,
    seller: "Disney Store",
    sellerImages: Picture,
    isLive: false,
    isTommorow: true,
    date: "11/28 - 10:30 PM ",
  },
  {
    id: 12,
    title: "Paglaki ko gusto ko maging PORN STAR",
    images: Picture2,
    seller: "Upper Deck ",
    sellerImages: User,
    isLive: false,
    isTommorow: true,
    date: "Tomorrow - 10 PM ",
  },
];

const NextNav = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-y-0 top-0 right-0 hover:bg-gradient-to-r from-black/5 to-black/40   rounded-r-lg h-[273px] md:h-[324px] z-10 hidden md:flex items-center cursor-pointer "
    >
      <div className="w-10 h-12 flex items-center justify-center rounded-sm drop-shadow-2xl  bg-white/90 hover:bg-white">
        <MdOutlineArrowBackIosNew className="text-xl text-gray-400 rotate-180" />
      </div>
    </div>
  );
});
NextNav.displayName = "NextNav";

const PrevNav = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-y-0 top-0 left-0 hover:bg-gradient-to-l from-black/5 to-black/40  rounded-l-lg h-[273px] md:h-[324px] z-10 hidden md:flex items-center cursor-pointer"
    >
      <div className="w-10 h-12 flex items-center justify-center rounded-sm drop-shadow-2xl  bg-white/90 hover:bg-white">
        <MdOutlineArrowBackIosNew className="text-xl text-gray-400 " />
      </div>
    </div>
  );
});
PrevNav.displayName = "PrevNav";

const FeaturedItems: React.FC = () => {
  const router = useRouter();
  const nextNav = useRef<HTMLDivElement>(null);
  const prevNav = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className=" p-2">
        <div className="flex justify-between py-2 text-white pr-[16px]  md:pr-0">
          <div className=" text-[14px] md:text-[20px] font-bold flex flex-row items-center gap-1">
            Featured shows
            <InfoIcon />
          </div>
          <div
            onClick={() => router.push("/videos")}
            className="hover:cursor-pointer text-[14px] font-normal md:text-[16px] md:font-medium flex flex-row items-center"
          >
            See all
            <Image
              src={Right}
              alt="info"
              className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
            />
          </div>
        </div>

        <div className="relative">
          <PrevNav ref={prevNav} />
          <NextNav ref={nextNav} />

          <SwiperContainer
            direction="horizontal"
            navigation={{
              enabled: false,
            }}
            loop={true}
            slidesPerGroup={undefined}
            slidesPerView={`auto`}
            spaceBetween={8}
            breakpoints={{
              768: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 22,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onInit={(swiper) => {
              const navigationParams = swiper.params.navigation;
              if (navigationParams && typeof navigationParams !== "boolean") {
                navigationParams.prevEl = prevNav.current;
                navigationParams.nextEl = nextNav.current;

                // console.log("Swiper init", swiper);
                // swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            className="cursor-pointer rounded-lg [.swiper-button-next]:hidden"
          >
            {itemsData.map((item) => (
              <SwiperSlide className="rounded-lg" key={item.id}>
                <div
                  onClick={() => router.push(`/videos/${item.id}`)}
                  key={item.id}
                  className="relative overflow-hidden w-[151px] h-[273px] md:w-[209px] md:h-[324px] flex-shrink-0 shadow-md bg-white  rounded-lg text-black flex flex-col justify-between"
                >
                  <Image
                    src={item.images}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* <div className="absolute top-2.5 right-2.5  flex items-center justify-center">
                    {item.isLive ? (
                      <div className="  text-white bg-[#F30000] h-8 px-3 rounded-full flex justify-center gap-1.5 items-center  ">
                        <div className="bg-white w-[12px] h-[12px]  rounded-full  "></div>
                        <div className=" text-[12px] md:text-[13px] font-medium line-clamp-1">
                          LIVE
                        </div>
                      </div>
                    ) : null}

                    {item.isTommorow ? (
                      <div className=" bg-[#FDF2F7] h-8 px-3 rounded-full flex justify-center gap-2 items-center  ">
                        <div className=" text-[10px] md:text-[13px] font-medium text-[#E33685] line-clamp-1">
                          {item.date}
                        </div>
                      </div>
                    ) : null}
                  </div> */}
                </div>

                <div className=" text-white p-2 flex flex-col justify-between gap-y-1 md:gap-y-2 h-[5rem] md:h-24 w-[151px] md:w-[209px] ">
                  <div>
                    <div className="text-[14px] font-medium line-clamp-2">
                      {item.title}
                    </div>
                  </div>

                  <div className="text-[13px] font-normal  flex flex-row items-center gap-x-1 md:gap-2">
                    <div className="w-[26px] ">
                      <div className="relative overflow-hidden w-[20px] h-[20px] md:w-[24px] md:h-[24px] bg-black rounded-full ">
                        <Image src={item.sellerImages} alt={item.seller} />
                      </div>
                    </div>

                    <div className="text-[12px] md:text-[14px] font-normal truncate">
                      {item.seller}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
