import fetchApi from "../lib/strapi";
import type Menus from "../types/menu";
import qs from "qs";

interface GroupedByCategory {
  [key: string]: Menus[];
}

export default async function useMenuByCategory() {
  const menus = await fetchApi<Menus[]>({
    endpoint: "menus?populate=*",
    query: qs.stringify({
      populate: ["Category", "chocolate_type"],
    }),
    wrappedByKey: "data",
  });

  const groupedByCategory: GroupedByCategory = menus.reduce(
    (result: GroupedByCategory, item: Menus) => {
      const category = item.attributes.Category.category;

      if (!result[category]) {
        result[category] = [];
      }

      result[category].push(item);

      return result;
    },
    {}
  );

  return groupedByCategory as GroupedByCategory;
}
