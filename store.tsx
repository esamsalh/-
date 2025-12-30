
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Category, Order, Customer } from './types';

interface AppContextType {
  products: Product[];
  categories: Category[];
  orders: Order[];
  customers: Customer[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateStatus: (orderId: string, status: Order['status']) => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'ساعة ذكية فاخرة', price: 299, category: 'إلكترونيات', image: 'https://picsum.photos/seed/watch/400/400', description: 'ساعة ذكية مع ميزات تتبع الصحة', stock: 15 },
      { id: '2', name: 'عطر ليلي ملكي', price: 450, category: 'عطور', image: 'https://picsum.photos/seed/perfume/400/400', description: 'عطر شرقي أصيل يدوم طويلاً', stock: 20 },
      { id: '3', name: 'سماعات بلوتوث عازلة', price: 180, category: 'إلكترونيات', image: 'https://picsum.photos/seed/audio/400/400', description: 'صوت نقي مع عزل فعال للضوضاء', stock: 10 },
      { id: '4', name: 'حقيبة جلد طبيعي', price: 550, category: 'موضة', image: 'https://picsum.photos/seed/bag/400/400', description: 'جلد إيطالي أصلي صناعة يدوية', stock: 5 },
      { id: '5', name: 'نظارات شمسية عصرية', price: 320, category: 'إكسسوارات', image: 'https://picsum.photos/seed/glass/400/400', description: 'حماية كاملة من الأشعة فوق البنفسجية', stock: 25 },
    ];
  });

  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'إلكترونيات', icon: '💻' },
    { id: '2', name: 'عطور', icon: '✨' },
    { id: '3', name: 'موضة', icon: '👕' },
    { id: '4', name: 'إكسسوارات', icon: '🕶️' },
  ]);

  const [orders, setOrders] = useState<Order[]>([
    { id: 'ORD-001', customerName: 'أحمد علي', total: 749, status: 'delivered', date: '2023-10-25', items: [] },
    { id: 'ORD-002', customerName: 'سارة خالد', total: 180, status: 'pending', date: '2023-11-01', items: [] },
  ]);

  const [customers, setCustomers] = useState<Customer[]>([
    { id: 'C-01', name: 'أحمد علي', email: 'ahmed@example.com', phone: '055555555', joinDate: '2023-01-15' },
    { id: 'C-02', name: 'سارة خالد', email: 'sara@example.com', phone: '056666666', joinDate: '2023-03-20' },
  ]);

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin.toString());
  }, [isAdmin]);

  const addProduct = (p: Omit<Product, 'id'>) => {
    const newProduct = { ...p, id: Math.random().toString(36).substr(2, 9) };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (p: Product) => {
    setProducts(products.map(item => item.id === p.id ? p : item));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addCategory = (c: Omit<Category, 'id'>) => {
    setCategories([...categories, { ...c, id: Date.now().toString() }]);
  };

  const updateStatus = (orderId: string, status: Order['status']) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status } : o));
  };

  return (
    <AppContext.Provider value={{
      products, categories, orders, customers,
      addProduct, updateProduct, deleteProduct,
      addCategory, updateStatus, isAdmin, setIsAdmin
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
