import { pageLink, PAGES } from "@site/src/constants";
import "./page-link.css";

const PageLink = ({
  id,
  params = {},
}: {
  id: string;
  params?: Record<string, string>;
}) => {
  const page = PAGES[id];
  if (!page) return undefined;
  return (
    <a href={pageLink(id, params)} target="_blank" className="page-link">
      {page.name}
    </a>
  );
};

export default PageLink;
