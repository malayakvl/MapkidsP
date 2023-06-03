// Each table pagination and controls meta stored to redux separately
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const baseApiUrl = publicRuntimeConfig.apiUrl;
export const baseUrl = publicRuntimeConfig.siteUrl;

export enum PaginationType {
  IMAGES = "images",
  ARTICLES = "articles",
  VIDEOS = "videos",
}

export const TableHeaders: { [key in PaginationType]: Type.DataTableHeader[] } =
  {
    [PaginationType.IMAGES]: [
      { titleKey: "image" },
      { titleKey: "Actions", className: "actions" },
    ],
    [PaginationType.VIDEOS]: [
      { titleKey: "image" },
      { titleKey: "Actions", className: "actions" },
    ],
    [PaginationType.ARTICLES]: [
      { titleKey: "title" },
      { titleKey: "created_at" },
      { titleKey: "active", className: "text-center uppercase" },
      { titleKey: "Actions", className: "actions" },
    ],
  };
