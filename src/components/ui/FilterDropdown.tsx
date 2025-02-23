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
            <div className={`relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}>
                <input
                    className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-text-color-main focus:ring-0`}
                    value={selected || query}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setIsOpen(true);
                    }}
                    placeholder={placeholder}
                    onFocus={() => setIsOpen(true)}
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                        <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2"/>
                    </svg>
                </button>
            </div>
            <Transition
                as={Fragment}
                show={isOpen}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
            >
                <div className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-alt py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none z-[99]`}>
                    {filteredOptions.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                        </div>
                    ) : (
                        filteredOptions.map((option) => (
                            <div
                                key={option}
                                className={`relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer ${selected === option ? 'bg-[#bade4f] text-alt' : 'text-text-color-main'}`}
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