import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../constants/talbeData';

import { IProductDto } from '../types/table';

interface ProductContextProps {
  products: IProductDto[];
  filteredProducts: IProductDto[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProductDto[]>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<IProductDto[]>(PRODUCTS);
    const [filteredProducts, setFilteredProducts] = useState<IProductDto[]>(products);
  
    useEffect(() => {
      setFilteredProducts(products);
    }, [products]);
  
    return (
      <ProductContext.Provider value={{ products, filteredProducts, setFilteredProducts }}>
        {children}
      </ProductContext.Provider>
    );
  };
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
