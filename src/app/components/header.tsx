import Image from "next/image";
import { FunctionComponent } from "react";
import { GetSitePaths } from "../utils";
import NsongaLogo from "./logo";

const Header: FunctionComponent = async () => {
  const sitePaths: string[] = await GetSitePaths();

  return (
    <header className="flex justify-between p-5">
      <div className="">
        <NsongaLogo />
      </div>

      <ul className="flex items-center">
        {sitePaths && sitePaths.length > 0
          ? sitePaths.map((path, index) => {
              const freindlyName =
                path.charAt(0).toUpperCase() +
                path.substring(1).replaceAll("-", " ").replaceAll("/", "");
              return (
                <li key={index}>
                  <a href={path}>{freindlyName}</a>
                </li>
              );
            })
          : null}
      </ul>
    </header>
  );
};

export default Header;
