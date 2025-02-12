import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface DropdownMenuProps {
  items: { label: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="px-4 py-2 text-white bg-blue-600 rounded-md">
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 bg-white border border-gray-200 rounded-md shadow-lg">
        {items.map((item) => (
          <MenuItem key={item.label} as="a" className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
            {item.label}
          </MenuItem>
        ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
