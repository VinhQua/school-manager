import { SiGoogleclassroom } from "react-icons/si";
import { BiTask } from "react-icons/bi";
import { MdOutlineClass } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
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
