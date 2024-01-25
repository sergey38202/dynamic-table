import React, { useState } from 'react';
import Input from '../Input';
import SearchIcon from '../../assets/icons/search.svg';
import FilterIcon from '../../assets/icons/filter.svg';
import Button from '../Button';
import Select from '../Select';
import { useProductContext } from '../../Context/productContext';

const Header = () => {
  const { products, setFilteredProducts } = useProductContext();
  const [filterValue, setFilterValue] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>('');

  const handleFilterClick = () => {
    const filteredByName = products.filter((product) =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    const filteredByStatus = selectedStatus
      ? filteredByName.filter((product) => (product.active ? 'active' : 'inactive') === selectedStatus)
      : filteredByName;

    setFilteredProducts(filteredByStatus);
  };

  return (
    <div className="flex items-center mb-10 justify-end space-x-4">
      <Input
        placeholder="Search"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        icon={SearchIcon}
        type="text"
      />
      <Select
        options={[
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
        ]}
        onChange={(value) => setSelectedStatus(value as any)}
      />
      <Button onClick={handleFilterClick} icon={FilterIcon}>
        Filter
      </Button>
    </div>
  );
};

export default Header;
