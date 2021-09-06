import Head from "next/head";
import Image from "next/image";
import { BadgeCheckIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid";
import user from "../images/user.png";
import suggestionData from "../data/suggestionData";
import StoriesSlider from "../components/StoriesSlider";
import Button from "../components/Button";
import Suggestions from "../components/Suggestions";
import Post from "../components/Post";
import usersData from "../data/usersData";
import UserPicture from "../components/UserPicture";
import { useState } from "react";

export default function Home() {
  const [dms, setDms] = useState(1);

  setInterval(() => {
    setDms(dms + 1);
  }, 4000);
  return (
    <div className='bg-gray-50  select-none mt-[58px]  	'>
      <Head>
        <title>Instagram Clone -Omar.Code</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className='bg-white border-b  mb-[1px] fixed top-0 z-50 w-screen  '>
        <section className='max-w-4xl h-14 mx-auto flex items-center justify-between px-4 xl:px-0'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
            width='100%'
            height='100%'
            objectFit='contain'
            className='cursor-pointer'
            alt='Instagram logo'
          />
          <div className='hidden border border-gray-300 rounded-sm md:flex items-center space-x-1 justify-center px-16 py-[2px]  '>
            <SearchIcon className='w-3 text-gray-400' />
            <input
              title='search'
              type='text'
              placeholder='Search'
              className='text-sm w-12'
            />
          </div>
          <section className='flex items-center justify-center space-x-4 sm:space-x-8'>
            <HomeIcon className='w-7' />
            <div className='relative'>
              <Image
                src='https://image.flaticon.com/icons/png/512/2099/2099085.png'
                height='20px'
                width='20px'
                alt='message icon'
              />
              <div className='absolute -top-3 left-3 text-xs font-semibold text-white bg-red-500 h-5 w-5 flex items-center justify-center rounded-full '>
                {dms}
              </div>
            </div>

            <div>
              <Image
                src='https://image.flaticon.com/icons/png/512/77/77521.png'
                height='20px'
                width='20px'
                alt='explore icon'
              />
            </div>
            <div>
              <Image
                src='https://image.flaticon.com/icons/png/512/1077/1077035.png'
                height='20px'
                width='20px'
                alt='heart icon'
              />
            </div>

            <div>
              <Image src={user} height='25px' width='25px' alt='user picture' />
            </div>
          </section>
        </section>
      </nav>

      <main className='md:my-8 xl:flex  mx-auto max-w-4xl '>
        <section className='xl:w-2/3 relative'>
          <StoriesSlider />
          {usersData.map(
            ({ id, img, name, place, post, likes, caption, date }) => (
              <Post
                key={id}
                img={
                  <UserPicture
                    small={true}
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
                }
                name={name}
                place={place}
                post={
                  <div className='relative h-[600px] xl:h-[500px] '>
                    <Image src={post} layout='fill' objectFit='cover' />
                  </div>
                }
                likes={likes}
                caption={caption}
                date={date}
              />
            )
          )}
        </section>
        <aside className='hidden xl:inline  py-6 fixed transform translate-x-[630px]'>
          <section className='flex-1'>
            <div className='flex justify-between '>
              <section className='flex  items-center space-x-6'>
                <Image
                  src={user}
                  height='60px'
                  width='60px'
                  alt='user picture'
                />
                <div>
                  <div className='flex space-x-1'>
                    <h2 className='text-sm font-semibold flex'>omar.code</h2>
                    <BadgeCheckIcon className='w-4 text-blue-500' />
                  </div>
                  <p className='text-gray-400 text-sm'>Omar Ouhra</p>
                </div>
              </section>
              <Button button='Switch' />
            </div>
            <section className='flex justify-between items-center mt-6 mb-4'>
              <p className='font-semibold text-sm text-gray-500 '>
                Suggestions for you
              </p>
              <button className=' text-xs font-semibold'>See All</button>
            </section>
          </section>
          {suggestionData.map(({ id, img, name, caption }) => (
            <Suggestions
              key={id}
              img={
                <Image
                  src={img}
                  width='35px'
                  height='35px'
                  className='rounded-full'
                  objectFit='cover'
                />
              }
              name={name}
              caption={caption}
            />
          ))}
          <p className='text-[11px] text-gray-300 mt-10 cursor-pointer'>
            About. Help. Press. API. Jobs. Privacy. Terms.
            <br />
            Locations. Top accounts. Hashtags. Language
          </p>
          <p className='text-gray-300 mt-6 text-[12px] '>
            © 2021 INSTAGRAM CLONE BY @OMAR.CODE
          </p>
        </aside>
      </main>
    </div>
  );
}
