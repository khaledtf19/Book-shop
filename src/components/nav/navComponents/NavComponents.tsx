import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { NavItemProps } from "../../../interfaces";
import { FiSearch, FiHeart } from "react-icons/fi";

export const Nav: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="flex flex-col  w-full h-full py-3 gap-2 align-middle">
      <div className="flex flex-col w-full h-full md:flex-row justify-center md:justify-between py-1 px-4 md:px-0 align-middle">
        <div className="hidden md:flex justify-center align-middle content-center">
          <h1 className="text-center self-center text-xl font-bold">Booksy</h1>
        </div>
        <NavSearch />
        <NavIcons />
      </div>
      {children}
    </nav>
  );
};

export const NavList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="flex flex-row gap-10 justify-center align-middle h-full">
      {children}
    </ul>
  );
};

export const NavItem: FC<NavItemProps> = ({ name, link }) => {
  const location = useLocation();

  return (
    <li className="text-text-color-2 h-full flex align-middle justify-center">
      <Link
        className={` font-semibold   h-full w-full p-[2px] flex flex-col justify-center align-middle hover:text-text-color ${
          link === location.pathname && "text-text-color"
        }`}
        to={`${link}`}
      >
        {name}
        <span
          className={`bg-text-color  ${
            link === location.pathname
              ? " flex py-[2px] px-[1px] w-full max-w-[4px] rounded-full self-center"
              : "hidden"
          }`}
        ></span>
      </Link>
    </li>
  );
};

export const NavSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-row justify-center align-middle bg-gray1 max-w-md rounded-lg self-center">
      <input
        className="w-full bg-gray1 px-2 py-1 focus:outline-none focus:shadow-outline rounded-lg"
        type="search"
        placeholder={`Search by author, title, name`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="hover:bg-secondary-color focus:bg-secondary-color rounded-r-lg px-1"
        onClick={() => {
          navigate(`/search/${search}`, { replace: true });
          setSearch("");
        }}
      >
        <FiSearch className=" h-full text-gray-400" />
      </button>
    </div>
  );
};

export const NavIcons = () => {
  return (
    <div className="flex align-middle justify-center gap-5 p-1 py-1">
      <div className="self-center">
        <FiHeart size={15} />
      </div>
      <div className=" bg-text-color p-4 rounded-full"></div>
      <div className=" flex justify-center align-middle content-center self-center relative">
        <p>EN</p>
      </div>
    </div>
  );
};
