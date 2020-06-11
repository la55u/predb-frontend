export const ROUTES = {
  home: "/",
  release: "/release/[rid]",
  login: "/login",
  register: "/register",
  restore: "/restore",
};

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const API_ENDPOINT = {
  RELEASES: "/api/data",
  SEARCH_SIMPLE: "/api/search",
  SEARCH_ADVANCED: "/api/search/advanced",
};
