interface PageMetadata {
  name: string;
  endpoint: string;
}

const domain = "https://kontraxhub.pages.dev";
const pages: Record<string, PageMetadata> = {
  contracts: { name: "Contracts", endpoint: "/contracts" },
  contractExplorer: {
    name: "Contract Explorer",
    endpoint: "/contract-explorer/:id",
  },
  workspaces: { name: "Workspaces", endpoint: "/workspaces" },
  workspaceExplorer: {
    name: "Workspace Explorer",
    endpoint: "/workspace-explorer/:id",
  },
};

export const Page = ({
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
    <a href={`${domain}${endpoint}`} target="_blank">
      {page.name}
    </a>
  );
};
