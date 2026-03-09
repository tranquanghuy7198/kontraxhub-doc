import { pageLink, PAGES } from "@site/src/constants";
import "./page-link.css";

const PageLink = ({
  id,
  pathParams = {},
  queryParams = {},
}: {
  id: string;
  pathParams?: Record<string, string>;
  queryParams?: Record<string, string>;
}) => {
  const page = PAGES[id];
  if (!page) return undefined;
  return (
    <a
      href={pageLink(id, pathParams, queryParams)}
      target="_blank"
      className="page-link"
    >
      {page.name}
    </a>
  );
};

export default PageLink;
