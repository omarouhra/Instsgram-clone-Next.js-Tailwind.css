import usersData from "../data/usersData";
import UserPicture from "./UserPicture";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";

function StoriesSlider() {
  const [slider, setslider] = useState(true);
  return (
    <section
      className='relative py-4 border-t md:mt-7 border-b max-w-xl mx-auto sm:border 
    overflow-x-auto'>
      {slider ? (
        <div className='z-20 absolute top-10 right-2   w-6 h-6 bg-white shadow-lg rounded-full'>
          <ChevronRightIcon
            className='w-6 ml-[1px] opacity-20 right-2'
            onClick={() => setslider(!slider)}
          />
        </div>
      ) : (
        <div className='z-20 absolute top-10 left-2   w-6 h-6 bg-white shadow-lg rounded-full'>
          <ChevronLeftIcon
            className='w-6  opacity-20 right-2'
            onClick={() => setslider(!slider)}
          />
        </div>
      )}
      <div className={slider? 'slider translate-x-0':"slider -translate-x-64" }>
        {usersData.map(({ id, img, name }) => (
          <section
            key={id}
            className='flex flex-col items-center justify-center space-y-2 '>
            <UserPicture
              img={
                <Image
                  src={img}
                  width='80px'
                  height='80px'
                  objectFit='cover'
                  className='rounded-full'
                />
              }
            />
            <h1 className='text-xs cursor-pointer'>
              {name.length > 8 ? `${name.substring(0, 8)}...` : name}
            </h1>
          </section>
        ))}
      </div>
    </section>
  );
}

export default StoriesSlider;
