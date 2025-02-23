'use client';
import '@/styles/index.css';
import MultiSelectFilterDropdown from '@/components/ui/MultiSelectFilterDropdown';
import FilterDropdown from '@/components/ui/FilterDropdown';
import { useState } from 'react';
import { button } from 'framer-motion/client';
import React from 'react';


   


const FilterSection = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
  
    const handleClick = () => { // Defined inside the component
      setIsFilterVisible(!isFilterVisible);
    };

    const singleSelectOptions1 = ["Любая", "Сильная", "Агрессивная", "Слабая"];
    const singleSelectOptions2 = ["Только нерешенные", "Только решенные", "Только начатые"];
    const singleSelectOptions3 = ["Одобрено платформой", "Не одобрено платформой", "Я не рекомендую", "Я рекомендую", "Я лев"];
    
    const multiSelectOptions1 = ["C++", "C#", "Java", "Kotlin", "php", "CSS"];
    const multiSelectOptions2 = ["Основы", "Массивы", "Это база", "Новое", "Популярное"];


    const [selectedValues1, setSelectedValues1] = useState<string[]>([]);
    const [selectedValues2, setSelectedValues2] = useState<string[]>([]);

    const [selectedValue1, setSelectedValue1] = useState<string | null>(null);
    const [selectedValue2, setSelectedValue2] = useState<string | null>(null);
    const [selectedValue3, setSelectedValue3] = useState<string | null>(null);
    
    const handleMultiSelectChange1 = (values: string[]) => {
        setSelectedValues1(values);
        console.log("MultiSelect 1 Selected Values:", values);
    };

    const handleMultiSelectChange2 = (values: string[]) => {
        setSelectedValues2(values);
        console.log("MultiSelect 2 Selected Values:", values);
    };

    const handleSingleSelectChange1 = (value: string | null) => {
        setSelectedValue1(value);
        console.log("SingleSelect 1 Selected Value:", value);
    };

    const handleSingleSelectChange2 = (value: string | null) => {
        setSelectedValue2(value);
        console.log("SingleSelect 2 Selected Value:", value);
    };
    const handleSingleSelectChange3 = (value: string | null) => {
        setSelectedValue2(value);
        console.log("SingleSelect 3 Selected Value:", value);
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
                    options={singleSelectOptions1}
                    onChange={handleSingleSelectChange1}
                    placeholder="Любая"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValue1 && <p></p>}
              <p className='text-base text-text-color-main'>Прогресс</p>
                <FilterDropdown
                    options={singleSelectOptions2}
                    onChange={handleSingleSelectChange2}
                    placeholder="Только нерешенные"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValue2 && <p></p>}

                <p className='text-base text-text-color-main'>Статус</p>
                <FilterDropdown
                    options={singleSelectOptions3}
                    onChange={handleSingleSelectChange3}
                    placeholder="Одобрено платформой"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValue3 && <p></p>}

                <p className='text-base text-text-color-main'>Языки</p>
                <MultiSelectFilterDropdown
                    options={multiSelectOptions1}
                    onChange={handleMultiSelectChange1}
                    placeholder="C++"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValues1.length > 0 && <p></p>}

                <p className='text-base text-text-color-main'>Языки</p>
                <MultiSelectFilterDropdown
                    options={multiSelectOptions2}
                    onChange={handleMultiSelectChange2}
                    placeholder="C++"
                    inputClassName="text-text-color-main placeholder-main"
                    dropdownClassName="border-alt border-2 bg-transparent"
                    optionClassName="z-[99]"
                />
                {selectedValues2.length > 0 && <p></p>}
            </div>
        </div>
    );
};

export default FilterSection;