"use client";
import React from "react";
import { itemsData } from "../components/featured-items";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VideosPage = () => {
  const router = useRouter()
  return (
    <div className="pt-20">
      <div className="flex flex-wrap gap-6 md:p-4 justify-center">
        {itemsData.map((item) => (
          <div className="rounded-lg hover:cursor-pointer" key={item.id} onClick={()=>router.push(`/videos/${item.id}`)} >
            <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
