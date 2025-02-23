import { useState, Fragment, useRef, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface FilterDropdownProps {
    options: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    inputClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;
}

const MultiSelectFilterDropdown: React.FC<FilterDropdownProps> = ({
    options,
    onChange,
    placeholder = "Select options",
    inputClassName = "",
    dropdownClassName = "",
    optionClassName = "",
}) => {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) =>
                option.toLowerCase().includes(query.toLowerCase())
            );

    useEffect(() => {
        onChange(selected);
    }, [selected, onChange]);

    const handleSelection = (value: string) => {
        setSelected([...selected, value]);
        setQuery('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const removeSelection = (valueToRemove: string) => {
        setSelected(selected.filter((value) => value !== valueToRemove));
    };

    const clearAllSelections = () => {
        setSelected([]);
        setQuery('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="relative w-full text-left mb-3">
            <Combobox multiple value={selected} onChange={() => { }}>
                <div className="relative mt-1">
                    {/* Input and Button */}
                    <div className={`${dropdownClassName} relative w-full cursor-default overflow-hidden rounded-lg  text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm `}>
                        <Combobox.Input
                            className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 ${inputClassName}`}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                            ref={inputRef}
                        />
                         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer">
                         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                        <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2"/>
                        </svg>

                       </Combobox.Button>
                    </div>

                    {/* Selected Items Display */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {selected.map((selectedValue) => (
                            <button
                                key={selectedValue}
                                className="inline-flex items-center  text-[#F2F2F2] border-2 border-solid rounded-md px-3 py-0.5 text-sm font-medium hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    removeSelection(selectedValue);
                                }}
                            >
                                {selectedValue}
                                <svg className="ml-1 h-4 w-4 flex-shrink-0 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        ))}
                        {selected.length > 0 && (
                            <button
                                className="text-sm text-gray-500 hover:text-gray-700"
                                onClick={clearAllSelections}
                            >
                                Очистить
                            </button>
                        )}
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-alt py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none z-[99] ${optionClassName}`}>
                            {filteredOptions.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredOptions.map((option) => (
                                    <Combobox.Option
                                        key={option}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer ${active ? 'bg-[#bade4f] text-alt' : 'text-text-color-main'
                                            }`
                                        }
                                        value={option}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleSelection(option)
                                        }}
                                    >
                                        {({ selected: isSelected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${isSelected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {option}
                                                </span>
                                                {isSelected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default MultiSelectFilterDropdown;