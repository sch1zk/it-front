'use client';
import '@/styles/index.css';
import { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import ListallcasesSection from './ListallcasesSection';

const SortcasesSection = () => {
  const [sortBy, setSortBy] = useState('newest');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <section>
      <SearchInput />
      <div className='flex items-center mb-3 justify-between'>
    <div className="w-full max-w-[160px] focus:outline-none bg-alt rounded-sm  relative">
        <select
            className="w-full border-none py-1 pl-3 text-sm leading-5 focus:ring-0 text-text-color-main placeholder-main hover:cursor-pointer"
            value={sortBy}
            onChange={handleSortChange}
        >
            <option className='bg-alt text-main hover:bg-primary' value="newest">Сначала новые</option>
            <option className='bg-alt text-main hover:bg-primary' value="difficult">Самые сложные</option>
        </select>

        <button className="absolute inset-y-0 right-0 flex items-center hover:cursor-pointer pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2" />
            </svg>
        </button>
    </div>
    <div>
        <span className='text-muted text-md md:text-base'>Найдено кейсов: 1492</span>
    </div>
</div>
      
     
      <ListallcasesSection sortBy={sortBy} />
    </section>
  );
};

export default SortcasesSection;