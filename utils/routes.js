export const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const ROUTES = {
  home: "/",
  release: "/release/[rid]",
  login: "/login",
  register: "/register",
  restore: "/restore",
};

export const API_ENDPOINT = {
  RELEASES: "/api/data",
  COUNT: "/api/data/count",
  DOWNLOAD: "/api/data/download",

  SEARCH_SIMPLE: "/api/search",
  SEARCH_ADVANCED: "/api/search/advanced",

  LOGIN: "/api/auth/login",
  LOGOUT: "/api/auth/logout",
  REGISTER: "/api/auth/register",
  RESTORE: "/api/auth/restore",
  DELETE: "/api/auth/delete",
  ME: "/api/auth/me",

  NOTIFICATIONS: "/api/notifications",
};
