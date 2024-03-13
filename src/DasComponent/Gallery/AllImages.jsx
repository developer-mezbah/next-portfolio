import React from "react";
import FormTitle from "../Others/FormTitle";
import Horizontal from "../Others/Horizontal";
import "./style.css";
import Image from "next/image";
import { MdDeleteSweep, MdNoteAdd } from "react-icons/md";
import Link from "next/link";

const AllImages = () => {
  const gallery = [
    {
      id: 0,
      img: "https://upload.wikimedia.org/wikipedia/en/a/ae/The_Marshall_Mathers_LP.jpg",
    },
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/en/f/f2/BLACKPINK-_The_Album.png",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/3/3e/Trash_%28Alice_Cooper_album_-_cover_art%29.jpg",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Doors_-_Morrison_Hotel.jpg",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/en/7/76/Adele_-_30.png",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/en/8/84/StraightOuttaComptonN.W.A..jpg",
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/en/f/f2/BLACKPINK-_The_Album.png",
    },
  ];
  return (
    <div className="gallery dashboard-form-bg">
      <div className="">
        <div className="flex justify-between items-center">
          <ul className="flex justify-start items-center px-5">
            <li className="cursor-pointer px-5 py-3 text-textColor bg-themeColor m-5 rounded-xl ">
              Blogs
            </li>
            <li className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl ">
              projects
            </li>
            <li className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl ">
              Github
            </li>
            <li className="cursor-pointer px-5 py-3 text-textColor bg-bgDark m-5 rounded-xl ">
              Hero
            </li>
          </ul>
          <Link href={"/dashboard/upload-image"} className="cursor-pointer px-5 py-3 text-white bg-themeColor m-5 rounded-xl flex justify-center items-center gap-2 "><MdNoteAdd />Add New</Link>
        </div>
        <Horizontal />
        <div>
          <div className="wrapper">
            {gallery?.map((data) => (
              <div key={data.id} className="card group">
                <Image
                  fill
                  src={data?.img}
                  className="cover group-hover:scale-150"
                  alt=""
                />
                <div className="info group-hover:flex delay-75">
                  <div
                    className=" border-red-400 border-2 rounded-full hover:bg-red-500 text-red-500 hover:text-white"
                    style={{ padding: "10px" }}
                  >
                    <MdDeleteSweep className="text-4xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllImages;
