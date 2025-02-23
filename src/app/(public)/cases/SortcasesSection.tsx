'use client';
import '@/styles/index.css';
import React, { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import SortcasesButtons from '@/components/SortcasesButtons';
import ListallcasesSection from './ListallcasesSection'; // Import ListallcasesSection

const SortcasesSection = () => {
  const [sortBy, setSortBy] = useState('newest');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section>
      <SearchInput />
      <div className="w-full max-w-md relative">
        <select
          className="p-2 w-full mb-3 bg-alt text-main text-xl rounded-md hover:cursor-pointer"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="newest">Сначала новые</option>
          <option value="difficult">Самые сложные</option>
        </select>
      </div>
      <ListallcasesSection sortBy={sortBy} />
    </section>
  );
};

export default SortcasesSection;