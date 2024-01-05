import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoMdMic } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { GoBell } from "react-icons/go";

export default function Navbar() {
  return (
    <div style={{position:'sticky'}} className="bg-[#0F0F0F] flex justify-between items-center px-7 h-14 opacity-95 sticky">
      <div className="flex justify-center items-center gap-8 text-2xl">
        <div className="">
          <GiHamburgerMenu color="white" />
        </div>
        <div className="flex justify-center items-center gap-1">
          <BsYoutube className="text-3xl" color="red" />
          <span className="text-white font-bold">YouTube</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <form
          className="h-10 flex justify-between items-center border border-zinc-800"
          style={{ borderRadius: 50 }}
        >
          <div
            style={{ marginLeft: "10px" }}
            className="flex justify-center items-center gap-5"
          >
            <input
              style={{ color: "white" }}
              type="text"
              placeholder="Search"
              color="white"
              className="w-96 bg-[#0f0f0f] focus:outline-none border border-none px-2"
            />
            <button
              className="h-10 pr-0 w-auto bg-zinc-800"
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                padding: "0px 20px",
              }}
            >
              <GoSearch size={22} color="white" />
            </button>
          </div>
        </form>
        <button
          style={{ borderRadius: 50, padding: "8px" }}
          className="bg-zinc-800"
        >
          <IoMdMic size={22} color="white" />
        </button>
      </div>

      <div className="flex justify-center items-center gap-7">
        <button>
          <AiOutlineVideoCameraAdd size={22} color="white" />
        </button>

        <button style={{position:'relative'}}>
          <GoBell size={22} color="white"/>
          <span className="text-white bg-red-600" style={{position:'absolute', bottom:10, right:-15, borderRadius:50, padding:'0px 5px', fontSize:'10px'}}>5+</span>
        </button>

        <button>
          <img style={{objectFit:'cover', borderRadius:50}} className="h-6 w-6" src={'https://images.pexels.com/photos/4622839/pexels-photo-4622839.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'} alt="logo"/>
        </button>
      </div>
    </div>
  );
}
