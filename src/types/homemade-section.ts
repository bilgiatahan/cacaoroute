import { type BlocksContent } from "@strapi/blocks-react-renderer";

export default interface Homemade_section {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: {
      data: ImageItem[];
    };
  };
}

export interface ImageItem {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    mime: string;
    url: string;
    formats: {
      large: FormatItem;
      small: FormatItem;
      medium: FormatItem;
      thumbnail: FormatItem;
    };
  };
}

interface FormatItem {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}
