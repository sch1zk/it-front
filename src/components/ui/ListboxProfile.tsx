"use client";

import { Checkbox, Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { MdAdd, MdArrowDropDown, MdCancel, MdCheck } from 'react-icons/md';

export interface ListboxProfileItem {
  id: number;
  name: string;
}

interface ListboxProfileProps {
  items: ListboxProfileItem[];
  label?: string;
  multiple?: boolean;
}

const ListboxProfile: React.FC<ListboxProfileProps> = ({ items, label, multiple = false }) => {
  const [selectedItem, setSelectedItem] = useState(multiple ? [] : items[0]);

  return (
    <Field>
      {label && (<Label className="text-sm text-primary">{label}</Label>)}
      <Listbox
        value={selectedItem}
        onChange={setSelectedItem}
        multiple={multiple}
      >
        <ListboxButton
          className={clsx(
            "min-h-9 w-full group relative flex mt-1 cursor-pointer rounded-md flex-1 bg-main py-1.5 text-left text-sm/6",
            multiple ? "flex-wrap gap-1 px-1.5" : "px-3"
          )}
        >
          {multiple
            ? (selectedItem as ListboxProfileItem[]).map((item) => (
              <span key={item.id} className="px-2 bg-panel rounded-sm">{item.name}</span>
            ))
            : (selectedItem as ListboxProfileItem)?.name}
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
            "w-[var(--button-width)] bg-main rounded-md p-1.5 mt-2 text-sm/8 empty:invisible",
            "transition data-[leave]:data-[closed]:opacity-0",
            multiple && "inline-flex flex-wrap gap-1"
          )}
        >
          {items.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className={clsx(
                "cursor-pointer select-none px-1.5 data-[focus]:bg-panel rounded-md",
                multiple && "w-fit data-[selected]:bg-panel relative group"
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

export default ListboxProfile;
