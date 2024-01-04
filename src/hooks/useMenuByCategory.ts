import fetchApi from "../lib/strapi";
import type Menus from "../types/menu";

interface GroupedByCategory {
  [key: string]: Menus[];
}

export default async function useMenuByCategory() {
  const menus = await fetchApi<Menus[]>({
    endpoint: "menus?populate=*",
    wrappedByKey: "data",
  });

  const groupedByCategory: GroupedByCategory = menus.reduce(
    (result: GroupedByCategory, item: Menus) => {
      const category = item.attributes.Category.Category;

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