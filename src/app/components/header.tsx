import Image from "next/image";
import { FunctionComponent } from "react";
import { GetSitePaths, formatPath } from "../utils";
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
              if (!path.includes("/jobs-"))
                return (
                  <li key={index}>
                    <a href={path}>{formatPath(path)}</a>
                  </li>
                );
            })
          : null}
      </ul>
    </header>
  );
};

export default Header;
