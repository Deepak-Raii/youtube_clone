import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

export default function SideBar() {
  const [currenTitle, setCurrenTitle] = useState("Home");

  function handleOnClick(title) {
    setCurrenTitle(title);
  }
  const menu = [
    {
      icon: <MdHome size={25} />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size={25} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={25} />,
      title: "Subscription",
    },
  ];
  return (
    <div className="px-5 py-5 h-screen">
      <ul>
        {menu.map((data, index) => (
          <li
            key={index}
            onClick={() => {
              handleOnClick(data.title);
            }}
          >
            <a
              href="#"
              className={`flex justify-start items-center gap-5 mb-2 px-10 py-2 rounded-md hover:bg-zinc-800 ${
                data.title === currenTitle ? "bg-zinc-700" : ""
              }`}
            >
              {data.icon}
              <span>{data.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
