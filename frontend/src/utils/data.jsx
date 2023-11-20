import { SiGoogleclassroom } from "react-icons/si";
import { BiTask } from "react-icons/bi";
import { MdOutlineClass } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
export const navLinks = [
  {
    title: "Daily Tasks",
    links: [
      {
        name: "attendance",
        icon: <MdOutlineClass />,
      },
      {
        name: "homework",
        icon: <BiTask />,
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        name: "classes",
        icon: <SiGoogleclassroom />,
      },
      {
        name: "students",
        icon: <PiStudentBold />,
      },
      {
        name: "staff",
        icon: <FaChalkboardTeacher />,
      },
    ],
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Email",
    iconColor: "rgb(0,194,146)",
    iconBg: "rgb(235,250,242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do & Daily Tasks",
    iconColor: "rgb(255,244,229)",
    iconBg: "rgb(254,201,15)",
  },
];
