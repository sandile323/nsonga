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

export const formatPath = (input: string): string => {
  if (!input) return input; // If the input is empty or null, return it as is

  // Remove all special characters and trim whitespace
  const cleanedInput = input.replace(/[^a-zA-Z0-9 ]/g, " ").trim();

  // If cleanedInput is empty after removing special characters, return an empty string
  if (!cleanedInput) return "";

  // Convert to sentence case
  return (
    cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1).toLowerCase()
  );
};
