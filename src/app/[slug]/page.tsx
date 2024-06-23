import fs from "fs";
import path from "path";
import SectionCollection, {
  sectionCollectionProps,
} from "../components/section";
import { FunctionComponent } from "react";

interface PageProps {
  params: { slug: string };
}

const Page: FunctionComponent<PageProps> = ({ params }) => {
  const slug = params.slug;

  const filePath = path.resolve(process.cwd(), "pages.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const pageData = jsonData.pages.find(
    (page: any) => page.slug.replace("/", "") === slug
  );

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    //<div>
    //   <h1>{pageData.title}</h1>
    //   <p>My Page: {pageData.slug}</p>
    // </div>
    <>
      <SectionCollection sections={pageData.sections} />
    </>
  );
};

export async function generateStaticParams() {
  const filePath = path.resolve(process.cwd(), "./pages.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const paths = jsonData.pages.map((page: any) => {
    const slug = page.slug === "/" ? "" : page.slug.replace("/", "");
    return { slug };
  });

  return paths;
}

export default Page;
