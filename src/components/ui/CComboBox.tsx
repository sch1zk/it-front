"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition
} from '@headlessui/react';
import { useState, Fragment } from 'react';
import clsx from 'clsx';

export interface CComboBoxItem {
  id: number;
  name: string;
}

interface CComboBoxProps {
  items: CComboBoxItem[];
}

const CComboBox: React.FC<CComboBoxProps> = ({ items }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<CComboBoxItem | null>(items.length > 0 ? items[0] : null);

  const filteredItems =
    query === ''
      ? items
      : items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="">
      <Combobox value={selected} onChange={setSelected} onClose={() => setQuery('')}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full bg-main py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(item: CComboBoxItem | null) => item?.name ?? ''}
            onChange={(event) => setQuery(event.target.value)}
          />

          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            x
          </ComboboxButton>
        </div>

        <Transition
          as={Fragment}
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ComboboxOptions
            anchor="bottom"
            className={clsx(
              'w-[var(--input-width)] bg-main p-1 empty:invisible',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            )}
          >
            {filteredItems.length === 0 ? (
              <div className="p-2 text-sm text-gray-400">Ничего не найдено</div>
            ) : (
              filteredItems.map((item) => (
                <ComboboxOption
                  key={item.id}
                  value={item}
                  className="group flex cursor-default items-center gap-2 py-1.5 px-2.5 select-none data-[focus]:bg-alt"
                >
                  <div className="text-white text-sm/6">{item.name}</div>
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
};

export default CComboBox;
