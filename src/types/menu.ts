export default interface Menu {
  id: number;
  attributes: {
    Name: string;
    Description: string;
    Price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Category: Category;
    ChocolateCategory: ChocolateCategory[];
  };
}

interface Category {
  id: number;
  Category: string;
}

export interface ChocolateCategory {
  id: number;
  ChocolateCategory: string;
}
