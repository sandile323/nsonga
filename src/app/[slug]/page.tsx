import SectionCollection from "../components/section";
import { FunctionComponent } from "react";
import { GetSiteData } from "../utils";

interface PageProps {
  params: { slug: string };
}

const Page: FunctionComponent<PageProps> = async ({ params }) => {
  const slug = params.slug;

  const jsonData = await GetSiteData();

  const pageData = jsonData.pages.find(
    (page: any) => page.slug.replace("/", "") === slug
  );

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <>
      {pageData?.sections && pageData?.sections.length > 0 ? (
        <SectionCollection sections={pageData.sections} />
      ) : null}
    </>
  );
};

export async function generateStaticParams() {
  const jsonData = await GetSiteData();

  const paths = jsonData.pages.map((page: any) => {
    const slug = page.slug === "/" ? "" : page.slug.replace("/", "");
    return { slug };
  });

  return paths;
}

export default Page;
