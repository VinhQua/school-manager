"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Logo from "./Logo";
import { closeSideBar } from "@/features/settings/settingSlice";
import { MdOutlineCancel } from "react-icons/md";
const Sidebar = () => {
  const { isSidebarActive } = useSelector((store) => store.setting);
  const dispatch = useDispatch();
  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2`;
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-base-300 hover:text-neutral hover:bg-base-100 m-2";
  return (
    <div
      className={`${
        isSidebarActive
          ? "w-72 fixed sidebar bg-base-100 transition-transform"
          : "w-0"
      } `}
    >
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {isSidebarActive && (
          <>
            <div className="flex justify-between items-center">
              <Link
                href={"/"}
                onClick={() => dispatch(closeSideBar())}
                className="items-center gap-3 ml-3 mt-4  flex text-xl font-extrabold tracking-tight text-neutral-focus"
              >
                <Logo w={5} h={5} />
                <span>Ability</span>
              </Link>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Menu"
                onClick={() => dispatch(closeSideBar())}
              >
                <button className="text-xl rounded-full p-3 hover:bg-base-200 mt-4 block md:hidden">
                  <MdOutlineCancel />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
