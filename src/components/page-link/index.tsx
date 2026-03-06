import { domain, pages } from "@site/src/constants";
import "./page-link.css";

const PageLink = ({
  id,
  params = {},
}: {
  id: string;
  params?: Record<string, string>;
}) => {
  const page = pages[id];
  if (!page) return undefined;
  let endpoint = page.endpoint;
  for (const [key, value] of Object.entries(params))
    endpoint = endpoint.replace(`:${key}`, value);
  return (
    <a href={`${domain}${endpoint}`} target="_blank" className="page-link">
      {page.name}
    </a>
  );
};

export default PageLink;
