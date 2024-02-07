export default interface Product {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: ImageData | null;
    };
    chocolate_type: ChocolateType[];
  };
}

interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      large: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface ChocolateType {
  id: number;
  type: string;
}
