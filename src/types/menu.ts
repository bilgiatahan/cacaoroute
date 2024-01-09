export default interface Menu {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Category: Category;
    isVegan?: boolean;
    isGlutenFree?: boolean;
    chocolate_type: ChocolateType[];
  };
}

interface Category {
  id: number;
  category: string;
}

export interface ChocolateType {
  id: number;
  type: string;
}
