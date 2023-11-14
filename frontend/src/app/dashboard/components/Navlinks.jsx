import React from "react";
import { navLinks } from "@/utils";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeSideBar } from "@/features/settings/settingSlice";
import { usePathname } from "next/navigation";
const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2`;
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-base-300 hover:text-neutral hover:bg-base-100 m-2";
const Navlinks = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  return (
    <div className="mt-10">
      {navLinks.map((item) => (
        <div key={item.title}>
          <p className="text-neutral m-3 mt-4 uppercase">{item.title}</p>
          {item.links.map((link) => (
            <Link
              key={link.name}
              href={`/dashboard/${link.name}`}
              onClick={() => dispatch(closeSideBar())}
              className={`${
                pathname === `/dashboard/${link.name}` ? activeLink : normalLink
              }`}
            >
              {link.icon}
              <span className="capitalize"> {link.name}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
