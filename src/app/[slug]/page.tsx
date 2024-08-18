import SectionCollection, { section } from "../components/section";
import { FunctionComponent } from "react";
import { GetSiteData } from "../utils";
import DocumentTitle from "../components/documentTitle";

interface PageProps {
  params: { slug: string };
}

const Page: FunctionComponent<PageProps> = ({ params }) => {
  const slug = params.slug;

  const jsonData = GetSiteData();

  const pageData = jsonData.pages.find(
    (page: any) => page.slug.replace("/", "") === slug
  );

  const pageTitle = pageData?.title || slug;

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <DocumentTitle title={pageTitle} />
      {pageData?.sections && pageData?.sections.length > 0 ? (
        <SectionCollection
          sections={pageData.sections as section[] | undefined}
        />
      ) : null}
    </>
  );
};

export function generateStaticParams() {
  const jsonData = GetSiteData();

  const paths = jsonData.pages.map((page: any) => {
    const slug = page.slug === "/" ? "" : page.slug.replace("/", "");
    return { slug };
  });

  return paths;
}

export default Page;
