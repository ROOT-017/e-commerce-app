interface Category {
  slug: string;
  name: string;
  url: string;
}
interface CategoryWithImage extends Category {
  image: string;
}
export type HTTP_METHODS = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductMeta {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus:
    | "In Stock"
    | "Out of Stock"
    | "Backorder"
    | "Discontinued";
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

interface ProductWithPagination {
  limits: number;
  skip: number;
  total: number;
  products: Product[];
}
