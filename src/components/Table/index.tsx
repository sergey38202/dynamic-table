import React, { useState } from 'react';
import Modal from '../Modal';
import { useProductContext } from '../../Context/productContext';

import { ITableProps } from './types';
import { IProductDto } from '../../types/table';

const Table: React.FC<ITableProps> = ({ headers }) => {
  const { filteredProducts, setFilteredProducts } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<IProductDto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedProduct) {
      setSelectedProduct((prevProduct: any) => ({
        ...prevProduct!,
        name: e.target.value,
      }));
    }
  };

  const handleUpdateClick = () => {
    if (selectedProduct) {
      setFilteredProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === selectedProduct.id ? selectedProduct : product
        )
      );
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="py-2 px-4 border-b text-left border-none">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-3 px-4 border-b">{product.name}</td>
              <td className="py-3 px-4 border-b">{product.active ? 'Active' : 'Inactive'}</td>
              <td className="py-3 px-4 border-b">
                {new Date(product.createdAt).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td className="py-3 px-4 border-b">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:outline-none"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProduct && (
          <>
            <h2 className="text-xl font-semibold mb-4">Edit {selectedProduct.name}</h2>
            <form>
              <label className="block mb-2">
                Product Name:
                <input
                  type="text"
                  value={selectedProduct.name}
                  onChange={handleNameChange}
                  className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </label>
              <button
                type="button"
                onClick={handleUpdateClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
              >
                Update
              </button>
            </form>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Table;
