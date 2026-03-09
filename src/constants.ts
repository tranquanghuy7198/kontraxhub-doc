interface PageMetadata {
  name: string;
  endpoint: string;
}

export const PRODUCT_NAME = "KontraxHub";
export const DOMAIN = "https://kontraxhub.pages.dev";
export const PAGES: Record<string, PageMetadata> = {
  home: { name: PRODUCT_NAME, endpoint: "/" },
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

export const pageLink = (id: string, params: Record<string, string> = {}) => {
  let endpoint = PAGES[id].endpoint;
  for (const [key, value] of Object.entries(params))
    endpoint = endpoint.replace(`:${key}`, value);
  return `${DOMAIN}${endpoint}`;
};
