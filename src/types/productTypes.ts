export interface Products {
  _id: string;
  title: string;
  image: string;
  category: number;
  price: number;
  weight: number;
  vegan: boolean;
  new: boolean;
  hit: boolean;
  lactose: boolean;
  spicy: boolean;
  ingredients: { title: string; image: string; }[],
}