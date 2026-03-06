interface PageMetadata {
  name: string;
  endpoint: string;
}

export const domain = "https://kontraxhub.pages.dev";
export const pages: Record<string, PageMetadata> = {
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
