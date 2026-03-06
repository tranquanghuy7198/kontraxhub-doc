import { DOMAIN, PAGES } from "@site/src/constants";
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
  let endpoint = page.endpoint;
  for (const [key, value] of Object.entries(params))
    endpoint = endpoint.replace(`:${key}`, value);
  return (
    <a href={`${DOMAIN}${endpoint}`} target="_blank" className="page-link">
      {page.name}
    </a>
  );
};

export default PageLink;
