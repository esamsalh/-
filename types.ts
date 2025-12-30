
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  items: { productId: string; quantity: number; price: number }[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
}
