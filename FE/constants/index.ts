// Each table pagination and controls meta stored to redux separately
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const baseApiUrl = publicRuntimeConfig.apiUrl;
export const baseUrl = publicRuntimeConfig.siteUrl;

export enum PaginationType {
  IMAGES = "images",
}

export const TableHeaders: { [key in PaginationType]: Type.DataTableHeader[] } =
  {
    [PaginationType.IMAGES]: [
      { titleKey: "image" },
      { titleKey: "Actions", className: "actions" },
    ],
  };
