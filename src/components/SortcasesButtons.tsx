import React from 'react';
import Image from 'next/image';

interface SortcasesButtonsProps {
  iconbutton?: string;
}

const SortcasesButtons: React.FC<SortcasesButtonsProps> = ({ iconbutton = "/images/icons/search-icon.svg" }) => { 
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Поиск кейсов"
        className="pl-10 pr-4 py-2 w-full border-2 border-alt border-solid rounded-md"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image
          src={iconbutton}
          alt="Поиск"
          width={24}
          height={24}
          className="h-5 w-5 text-gray-500"
        />
      </div>
    </div>
  );
};

export default SortcasesButtons;