import usersData from "../data/usersData";
import Image from "next/image";
function UserPicture({ img, small }) {
  return (
    <div className={small ? `h-10 w-10 picture` : `h-14 w-14 picture`}>
      <div className='p-[2px] flex  bg-white rounded-full'>{img}</div>
    </div>
  );
}

export default UserPicture;
