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
  embed: { name: "Embed", endpoint: "/embed/:id" },
};

export enum NetworkCluster {
  Evm = "evm",
  Ronin = "ronin",
  Solana = "solana",
  Sui = "sui",
  Aptos = "aptos",
  Cosmos = "cosmos",
  Stellar = "stellar",
  Near = "near",
  Polkadot = "polkadot",
  Ton = "ton",
}

export const pageLink = (
  id: string,
  pathParams: Record<string, string> = {},
  queryParams: Record<string, string> = {},
) => {
  let endpoint = PAGES[id].endpoint;
  for (const [key, value] of Object.entries(pathParams))
    endpoint = endpoint.replace(`:${key}`, value);
  const url = new URL(endpoint, DOMAIN);
  for (const [key, value] of Object.entries(queryParams))
    url.searchParams.set(key, value);
  return url.toString();
};
