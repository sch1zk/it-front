import { useState, Fragment, useRef, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface FilterDropdownProps {
    options: string[];
    onChange: (value: string | null) => void;
    placeholder?: string;
    inputClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
    options,
    onChange,
    placeholder = "Select an option",
    inputClassName = "",
    dropdownClassName = "",
    optionClassName = "",
}) => {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<string | null>(null);
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
        setSelected(value);
        setQuery('');
    };

    return (
        <div className="relative w-full text-left mb-3">
            <Combobox value={selected} onChange={handleSelection}>
                <div className="relative mt-1">
                    <div className={`relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm ${dropdownClassName}`}>
                        <Combobox.Input
                            className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-text-color-main focus:ring-0 ${inputClassName}`}
                            displayValue={(item: string | null) => item || ''}
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
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {option}
                                                </span>
                                                {selected ? (
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

export default FilterDropdown;