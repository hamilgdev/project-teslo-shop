export type ISizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ITypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

export interface IconsProps {
  size?: 'sm' | 'md' | 'lg'
}

export interface IconButtonProps {
  onClick?: () => void
  icon: React.ReactNode
  arialLabel: string
}

export interface IProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  gender: 'men' | 'women' | 'kid' | 'unisex'
}
