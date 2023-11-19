import React from "react";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import avatar from "@/assets/platypus.png";
import { userProfileData } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfile } from "@/features/settings/settingSlice";
const UserProfile = () => {
  const dispatch = useDispatch();
  const { isUserProfileOpen } = useSelector((store) => store.setting);
  if (isUserProfileOpen) {
    return (
      <div className="nav-item absolute right-1 top-16 p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg ">User Profile</p>
          <Button
            icon={<MdOutlineCancel />}
            size={"2xl"}
            borderRadius={"50%"}
            handleClick={() => dispatch(toggleUserProfile())}
          />
        </div>

        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <Image
            className="rounded-full h-24 w-24"
            src={avatar}
            alt="user-profile"
          />
          <div>
            <p className="font-semibold text-xl">Thirsty Perry</p>
            <p className="text-sm text-base-content">Administrator</p>
            <p className="text-base-content text-sm font-semibold">
              platypus@gmail.com
            </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 cursor-pointer hover:bg-base-200"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-xl rounded-lg p-3 hover:bg-base-200"
              >
                {item.icon}
              </button>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-base-content text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Button
            text={"Logout"}
            borderRadius={"10px"}
            width={"full"}
            color={"base-300"}
            bgColor={"primary"}
          />
        </div>
      </div>
    );
  }
};
export default UserProfile;
