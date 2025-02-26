import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
interface FilterDropdownProps {
    options: string[]; 
    placeholder?: string; 
    inputClassName?: string;
    dropdownClassName?: string; 
    optionClassName?: string;
    onChange: (value: string | null) => void; 
}
const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, optionClassName, dropdownClassName, placeholder, inputClassName, onChange }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(query.toLowerCase())
    );
    const handleSelection = (option: string) => {
        setSelected(option);
        setQuery('');
        setIsOpen(false);
        onChange(option); 
    };
    return (
        <div className="relative w-full text-left mb-3">
        <div className="relative mt-1">
            <div className={`border-alt rounded-sm border-2 bg-transparent relative w-full cursor-default overflow-hidden text-left shadow-md focus:outline-none`}>
                <input
                    className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 text-main placeholder-main`}
                    value={selected || query}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setIsOpen(true);
                    }}
                    placeholder={placeholder}
                    onFocus={() => setIsOpen(true)}
                />
            </div>
            <Transition
                as={Fragment}
                show={isOpen}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
            >
                <div className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-alt py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none z-[99] ${optionClassName}`}>
                    {filteredOptions.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                        </div>
                    ) : (
                        filteredOptions.map((option) => (
                            <div
                                key={option}
                                className={`relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer ${selected === option ? 'bg-[#bade4f] text-alt' : 'text-main'}`}
                                onClick={() => handleSelection(option)}
                            >
                                <span className={`block truncate ${selected === option ? 'font-medium' : 'font-normal'}`}>
                                    {option}
                                </span>
                                {selected === option && (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                                        <FaCheck className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </Transition>
        </div>
    </div>
    );
};

export default FilterDropdown;