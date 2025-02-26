import { useState, useRef, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

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
    const [isOpen, setIsOpen] = useState(false);
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
        if (!selected.includes(value)) {
            setSelected([...selected, value]);
            setQuery('');
        }
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setIsOpen(false);
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
            <div className={`${dropdownClassName} relative w-full rounded-sm cursor-default overflow-hidden text-left shadow-md focus:outline-none`}>
                <div className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 gap-2 ${inputClassName} flex flex-wrap items-center`}>
                    {selected.map((selectedValue) => (
                        <div
                            key={selectedValue}
                            className="inline-flex items-center mr-1 px-2 py-0.5 text-sm font-medium bg-alt text-main rounded-sm"
                        >
                            {selectedValue}
                            <button
                                type="button"
                                className="ml-1 text-muted hover:text-main hover:cursor-pointer focus:outline-none"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeSelection(selectedValue);
                                }}
                            >
                                <IoClose className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                    {!selected.length && <span className="text-main">{placeholder}</span>}
                    <input
                        ref={inputRef}
                        className=" border-none py-0 pl-1 pr-0 text-sm leading-5 focus:ring-0 outline-none"
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        onFocus={() => setIsOpen(true)}
                        onClick={(e) => e.stopPropagation()}
                    />
                     <button className="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none">
                            <path d="M8.70663 11.5381L11.2966 14.1281C11.6866 14.5181 12.3166 14.5181 12.7066 14.1281L15.2966 11.5381C15.9266 10.9081 15.4766 9.82812 14.5866 9.82812H9.40663C8.51663 9.82812 8.07663 10.9081 8.70663 11.5381Z" fill="#F2F2F2" />
                        </svg>
                       </button>
                </div>
            </div>
            {isOpen && (
                <div className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-alt py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none z-[99] ${optionClassName}`}>
                    {filteredOptions.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                        </div>
                    ) : (
                        filteredOptions.map((option) => (
                            <div
                                key={option}
                                className={`relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer hover:bg-primary ${selected.includes(option) ? 'bg-[#bade4f] text-alt' : 'text-main'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSelection(option);
                                }}
                            >
                                <span className={`block truncate ${selected.includes(option) ? 'font-medium' : 'font-normal'}`}>
                                    {option}
                                </span>
                                {selected.includes(option) && (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                                        <FaCheck className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                )}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default MultiSelectFilterDropdown;