"use client";

import Image from "next/image";
import React, { FunctionComponent, useState } from "react";

import { GetSitePaths, formatPath } from "../utils";
import NsongaLogo from "./logo";
import Menu from "./menuIcon";
import CloseBtn from "./closeButton";

interface HeaderProps {
  sitePaths: string[];
}

const Header: FunctionComponent<HeaderProps> = ({ sitePaths }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-2 md:py-6">
      <div className="">
        <NsongaLogo />
      </div>

      <div>
        <div
          className="z-30 fixed top-20 right-4 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu /> : <CloseBtn />}
        </div>
        <ul
          className={`${
            !isOpen ? "hidden" : ""
          } fixed z-20 top-0 left-0 bg-white w-full md:flex md:relative`}
        >
          {sitePaths && sitePaths.length > 0
            ? sitePaths.map((path, index) => {
                if (!path.includes("/jobs-"))
                  return (
                    <li key={index} className="mb-3 text-center py-4 md:mr-4">
                      <a href={path}>{formatPath(path)}</a>
                    </li>
                  );
              })
            : null}
        </ul>
      </div>
    </header>
  );
};

export default Header;
