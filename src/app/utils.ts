import fs from "fs";
import path from "path";
import { FooterProps } from "./components/footer";

export const GetSiteData = async () => {
  const filePath = path.resolve(process.cwd(), "./pages.json");
  const siteData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return siteData;
};

export const GetSitePaths = async () => {
  const siteData = await GetSiteData();

  return siteData.pages.map((page: { slug: any }) => page.slug);
};

export const GetFooterData = async () => {
  const siteData = await GetSiteData();

  return siteData.footer as FooterProps;
};
