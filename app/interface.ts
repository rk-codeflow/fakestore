export interface ProductProps {
  id: number;
  images: string;
  title: string;
  description: string;
  category: {
    name: string;
  };
  price: number;
}
