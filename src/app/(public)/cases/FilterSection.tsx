'use client';
import '@/styles/index.css';
import MultiSelectFilterDropdown from '@/components/ui/MultiSelectFilterDropdown';
import FilterDropdown from '@/components/ui/FilterDropdown';
import { useState } from 'react';

interface FilterSectionProps {
    options: string[];
    placeholder?: string;
    onChange: (value: string | null) => void;
    className?: string; 
    dropdownClassName?: string; 
    inputClassName?: string;
    optionClassName?: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({  onChange, optionClassName, dropdownClassName, inputClassName }) => {
    const handleSelection = (option: string) => {
        onChange(option); 
    };
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const handleClick = () => { 
      setIsFilterVisible(!isFilterVisible);
    };
    const singleSelectOptionsСomplication = ["Любая", "Сильная", "Агрессивная", "Слабая"];
    const singleSelectOptionsProgress = ["Только нерешенные", "Только решенные", "Только начатые"];
    const singleSelectOptionsStatus = ["Одобрено платформой", "Не одобрено платформой", "Я не рекомендую", "Я рекомендую"];
   
    const [selectedValueСomplication, setSelectedValueСomplication] = useState<string | null>(null);
    const [selectedValueProgress, setSelectedValueProgress] = useState<string | null>(null);
    const [selectedValueStatus, setSelectedValueStatus] = useState<string | null>(null);

    const multiSelectOptionsLanguages = ["C++", "C#", "Java", "Kotlin", "php", "CSS"];
    const multiSelectOptionsTags = ["Основы", "Массивы", "Это база", "Новое", "Популярное"];
  
    const [selectedValuesLanguages, setSelectedValuesLanguages] = useState<string[]>([]);
    const [selectedValuesTags, setSelectedValuesTags] = useState<string[]>([]);
   
    const handleMultiSelectChangeLanguages = (values: string[]) => {
        setSelectedValuesLanguages(values);
    };

    const handleMultiSelectChangeTags = (values: string[]) => {
        setSelectedValuesTags(values);
    };

    const handleSingleSelectChangeСomplication = (value: string | null) => {
        setSelectedValueСomplication(value);
    };

    const handleSingleSelectChangeProgress = (value: string | null) => {
        setSelectedValueProgress(value);
    };
    const handleSingleSelectChangeStatus = (value: string | null) => {
        setSelectedValueStatus(value);
    };
    const multiSelectInputStyle = "bg-yellow-100 border-2 border-yellow-500"; 
    const dropdownStyle = "bg-gray-100 rounded-lg"; 
    const optionStyle = "hover:bg-green-100 text-green-700"; 
    return (
        <div className='w-full lg:w-1/3'>
             <button onClick={handleClick} className="p-2 w-full bg-alt text-main text-xl block lg:hidden hover:cursor-pointer">
             {isFilterVisible ? 'Скрыть Фильтр' : 'Показать Фильтр'}
      </button>
      <div className={`border-2 rounded-md mb-3 lg:block border-alt px-4 py-5 border-solid rounded-0 lg:rounded-md ${isFilterVisible ? 'block' : 'hidden'}`}>
        <p className='text-base text-main ml-text-filter'>Сложность</p>
        <div className='border-alt mb-3 border-2 bg-transparent relative w-full rounded-sm cursor-default overflow-hidden text-left shadow-md focus:outline-none'>
            <select 
                className="hover:cursor-pointer w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 text-text-color-main placeholder-main"
                value={selectedValueСomplication || ""} 
                onChange={(event) => handleSingleSelectChangeСomplication(event.target.value)}
            >
                <option className='bg-alt text-main'>Любая</option>
                {singleSelectOptionsСomplication.map((option) => (
                    <option className='bg-alt text-main hover:bg-primary' key={option} value={option}>{option}</option>
                ))}
            </select>
            <button className="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                        <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2" />
                    </svg>
             </button>
        </div>
        
        {selectedValueСomplication && <p></p>}

        <p className='text-base text-main ml-text-filter'>Прогресс</p>
        <div className='border-alt mb-3  border-2 bg-transparent relative w-full rounded-sm cursor-default overflow-hidden text-left shadow-md focus:outline-none'>
            <select
                className="hover:cursor-pointer w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 text-text-color-main placeholder-main"
                value={selectedValueProgress || ""}
                onChange={(event) => handleSingleSelectChangeProgress(event.target.value)}
            >
                <option className='bg-alt text-main'>Только нерешенные</option>
                {singleSelectOptionsProgress.map((option) => (
                    <option className='bg-alt text-main' key={option} value={option}>{option}</option>
                ))}
            </select>
            <button className="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                    <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2" />
                </svg>
            </button>
        </div>
       
        {selectedValueProgress && <p></p>}

        <p className='text-base text-text-color-main ml-text-filter'>Статус</p>
        <div className='border-alt mb-3 border-2 bg-transparent relative w-full rounded-sm cursor-default overflow-hidden text-left shadow-md focus:outline-none'>
        <select
            className="hover:cursor-pointer w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 text-text-color-main placeholder-main"
            value={selectedValueStatus || ""}
            onChange={(event) => handleSingleSelectChangeStatus(event.target.value)}
        >
            <option className='bg-alt text-main'>Одобрено платформой</option>
            {singleSelectOptionsStatus.map((option) => (
                <option className='bg-alt text-main' key={option} value={option}>{option}</option>
            ))}
        </select>
               <button className="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                        <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2" />
                    </svg>
                </button>
        </div>
       
        {selectedValueStatus && <p></p>}

        <p className='text-base text-main ml-text-filter'>Языки</p>
        <MultiSelectFilterDropdown
            options={multiSelectOptionsLanguages}
            onChange={handleMultiSelectChangeLanguages}
            placeholder="C++"
            inputClassName="text-text-color-main placeholder-main"
            dropdownClassName="border-alt border-2 bg-transparent"
            optionClassName="z-[99]"
        />
        {selectedValuesLanguages.length > 0 && <p></p>}

        <p className='text-base text-main ml-text-filter'>Теги</p>
        <MultiSelectFilterDropdown 
            options={multiSelectOptionsTags}
            onChange={handleMultiSelectChangeTags}
            placeholder="Массивы"
            inputClassName="text-text-color-main placeholder-main"
            dropdownClassName="border-alt border-2 bg-transparent"
            optionClassName="z-[99]"
        />
        {selectedValuesTags.length > 0 && <p></p>}
    </div>
        </div>
    );
};

export default FilterSection;