import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRef, useState } from "react";

function Post({ img, name, place, post, likes, caption, date }) {
  const [likesCounter, setLikesCounter] = useState(parseInt(likes));
  const [indicator, setIndicator] = useState(1);
  const [save, setSave] = useState(false);
  const [comment, setComment] = useState("");
  const commentRef = useRef("");

  const counter = () => {
    setLikesCounter(likesCounter + indicator);
    setIndicator(indicator * -1);
  };
  const saveFunction = () => {
    setSave(!save);
  };
  return (
    <div className='bg-white pt-2 md:border max-w-xl mx-auto md:my-8'>
      <div className='flex items-center justify-between px-4 py-3 '>
        <div className='flex space-x-3 items-center'>
          {img}
          <div>
            <h2 className='text-md font-semibold'>{name}</h2>
            <p className='text-xs '>{place}</p>
          </div>
        </div>
        <DotsHorizontalIcon className='w-4 cursor-pointer' />
      </div>
      {post}
      <div className='mt-4 flex items-center justify-between px-4'>
        <div className='flex space-x-4 items-center'>
          <div>
            <HeartIcon
              className={
                indicator > 0
                  ? "  h-7 mb-2 cursor-pointer active:scale-150  duration-150"
                  : "h-7 mb-2 cursor-pointer text-red-500 rounded-full fill-current active:scale-150  duration-150 "
              }
              onClick={() => {
                counter();
              }}
            />
          </div>
          <div>
            <Image
              src='https://image.flaticon.com/icons/png/512/134/134783.png'
              width='20px'
              height='20px'
              alt='comment icon'
              className='cursor-pointer '
            />
          </div>
          <div>
            <Image
              src='https://image.flaticon.com/icons/png/512/2099/2099085.png'
              height='20px'
              width='20px'
              alt='message icon'
              className='cursor-pointer'
            />
          </div>
        </div>

        <BookmarkIcon
          className={
            save
              ? "h-7 mb-3 text-black fill-current cursor-pointer"
              : "h-7 mb-3 text-black cursor-pointer hover:text-gray-500"
          }
          onClick={saveFunction}
        />
      </div>
      <p className='text-sm font-semibold px-4 mt-2 transition'>
        {parseInt(likesCounter)} likes
      </p>
      <div className='flex space-x-2 px-4 mt-3'>
        <p className='text-sm font-semibold'>
          {name} <span className='font-normal'>{caption}</span>
        </p>
      </div>
      {comment ? (
        <p className='text-sm px-4 mt-2'>
          <span className='font-semibold mr-2'>omar.code</span>
          {comment}
        </p>
      ) : (
        false
      )}
      <p className='mt-4 px-4 text-xs text-gray-400 md:mb-3'>{date}</p>
      <footer>
        <form className='hidden xl:flex text-sm  items-center justify-between px-4 py-4 border-t'>
          <div className='flex space-x-2 items-center'>
            <EmojiHappyIcon className='w-6 text-gray-600' />
            <input
              type='text'
              placeholder='Add a comment...'
              ref={commentRef}
              className='outline-none'
            />
          </div>
          <button
            type='submit'
            onClick={e => {
              e.preventDefault();
              setComment(commentRef.current.value);
              commentRef.current.value = "";
            }}
            className='text-blue-500 font-semibold '>
            Post
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Post;
