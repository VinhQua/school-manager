"use client";
import {
  toggleSideBar,
  setScreenSize,
  openSideBar,
  closeSideBar,
} from "@/features/settings/settingSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../../../assets/platypus.png";
import Image from "next/image";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <div className="tooltip  tooltip-bottom" data-tip={title}>
    <button
      className="relative text-xl rounded-full p-3"
      type="button"
      style={{ color }}
      onClick={() => customFunc()}
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        style={{ backgroundColor: dotColor }}
      ></span>
      {icon}
    </button>
  </div>
);

const Navbar = () => {
  const { isSidebarActive, screenSize } = useSelector((store) => store.setting);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(closeSideBar());
    } else {
      dispatch(openSideBar());
    }
  }, [screenSize]);
  return (
    <div
      className={`${
        isSidebarActive ? "md:ml-72 w-full" : "w-full min-h-screen flex-2"
      } `}
    >
      <div className="fixed md:static navbar w-full">
        <div className="flex justify-between w-full p-2 md:ml-6 md:mr-6 relative">
          <NavButton
            title={"Menu"}
            customFunc={() => dispatch(toggleSideBar())}
            icon={<AiOutlineMenu />}
          />
          <div className="flex items-end gap-2">
            <NavButton
              title={"Chat"}
              dotColor={"#03C9D7"}
              icon={<BsChatLeft />}
            />
            <NavButton
              title={"Notification"}
              dotColor={"rgb(254,201,15)"}
              icon={<RiNotification3Line />}
            />
            <div className="tooltip tooltip-bottom" data-tip="Profile">
              <div className="flex items-center gap-2 cursor-pointer p-1 rounded-lg">
                <Image
                  src={avatar}
                  alt="user-profile"
                  className="rounded-full w-8 h-8"
                />
                <p>
                  <span className="text-neutral text-14">Hi,</span>
                  <span className="text-neutral font-bold ml-1 text-14">
                    Platypus
                  </span>
                </p>
                <MdKeyboardArrowDown className="text-neutral text-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
