"use client";

import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { MdAdd, MdArrowDropDown, MdCancel } from 'react-icons/md';

export interface CListboxItem {
  id: number;
  name: string;
}

interface CListboxProps {
  items: CListboxItem[];
  label?: string;
  multiple?: boolean;
  buttonBackground?: string;
  optionsBackground?: string;
  optionBackground?: string;
  labelClass?: string;
  buttonClass?: string;
  optionsClass?: string;
  optionClass?: string;
}

const CListbox: React.FC<CListboxProps> = ({
  items,
  label,
  multiple = false,
  buttonBackground = "bg-main",
  optionsBackground = "bg-main",
  optionBackground = "bg-panel",
  labelClass = "text-primary",
  buttonClass = "w-full mt-1 rounded-md py-1.5",
  optionsClass = "rounded-md p-1.5 mt-2",
  optionClass = "rounded-md px-1.5",
}) => {
  const [selectedItem, setSelectedItem] = useState<CListboxItem | CListboxItem[]>(multiple ? [] : items[0]);

  return (
    <Field>
      {label && (<Label className={clsx("text-sm", labelClass)}>{label}</Label>)}
      <Listbox
        value={selectedItem}
        onChange={setSelectedItem}
        multiple={multiple}
      >
        <ListboxButton
          className={clsx(
            buttonBackground,
            buttonClass,
            "min-h-9 text-left text-sm/6 group relative flex cursor-pointer",
            multiple ? "flex-wrap gap-1 px-1.5" : "px-3",
          )}
        >
          {multiple
            ? Array.isArray(selectedItem) && selectedItem.map((item) => (
              <span key={item.id} className={clsx("px-2 rounded-sm", optionBackground)}>{item.name}</span>
            ))
            : (selectedItem as CListboxItem)?.name}
          {multiple ? (
            <MdAdd
              size={24}
              className="group-data-[open]:rotate-180 transition-transform"
            />
          ) : (
            <MdArrowDropDown
              size={24}
              className="absolute right-2 group-data-[open]:rotate-180 transition-transform"
            />
          )}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            optionsBackground,
            optionsClass, 
            "w-[var(--button-width)] text-sm/8 empty:invisible",
            "transition data-[leave]:data-[closed]:opacity-0",
            multiple && "inline-flex flex-wrap gap-1",
          )}
        >
          {items.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className={clsx(
                optionClass, 
                `cursor-pointer select-none data-[focus]:${optionBackground}`, 
                multiple && `w-fit data-[selected]:${optionBackground} relative group`,
              )}
            >
              {multiple ? (
                <>
                  <span className="flex items-center gap-2">
                    {item.name}
                  </span>
                  <MdCancel size={14} className="hidden absolute group-data-[selected]:inline -top-1 -right-1"/>
                </>
              ) : (
                item.name
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

export default CListbox;
