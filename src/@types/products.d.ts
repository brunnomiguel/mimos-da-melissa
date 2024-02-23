export interface ImageProduct {
  id: string;
  path: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  campaign: string;
  price: number;
  quantity: number;
  wholesale_discount: number;
  is_promotion: boolean;
  promotion_discount: number;
  description: string;
  color: string;
  size: string;
  wheight: string;
  height: string;
  width: string;
  created_at: string;
  updated_at: string;
  images: ImageProduct[];
}
