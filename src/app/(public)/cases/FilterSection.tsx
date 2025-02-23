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
    const singleSelectOptionsStatus = ["Одобрено платформой", "Не одобрено платформой", "Я не рекомендую", "Я рекомендую", "Я лев"];
   
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
        <div className='w-full lg:w-1/4'>
             <button onClick={handleClick} className="p-2 w-full bg-alt text-main text-xl block lg:hidden hover:cursor-pointer">
             {isFilterVisible ? 'Скрыть Фильтр' : 'Показать Фильтр'}
      </button>
      <div className={`border-2 lg:block border-alt px-2 py-3 border-solid rounded-0 lg:rounded-md ${ isFilterVisible ? 'block' : 'hidden'}`}>
             <p className='text-base text-text-color-main'>Сложность</p>
                <FilterDropdown
                    options={singleSelectOptionsСomplication}
                    onChange={handleSingleSelectChangeСomplication}
                    placeholder="Любая"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValueСomplication && <p></p>}
              <p className='text-base text-text-color-main'>Прогресс</p>
                <FilterDropdown
                    options={singleSelectOptionsProgress}
                    onChange={handleSingleSelectChangeProgress}
                    placeholder="Только нерешенные"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValueProgress && <p></p>}

                <p className='text-base text-text-color-main'>Статус</p>
                <FilterDropdown
                    options={singleSelectOptionsStatus}
                    onChange={handleSingleSelectChangeStatus}
                    placeholder="Одобрено платформой"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValueStatus && <p></p>}

                <p className='text-base text-text-color-main'>Языки</p>
                <MultiSelectFilterDropdown
                    options={multiSelectOptionsLanguages}
                    onChange={handleMultiSelectChangeLanguages}
                    placeholder="C++"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValuesLanguages.length > 0 && <p></p>}

                <p className='text-base text-text-color-main'>Теги</p>
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