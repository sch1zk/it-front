import React from 'react';
import Image from 'next/image';

interface SearchInputImgProps {
    icon_button: string;
    name: string;
    role: string;
    content: string;
}

const SearchInputImg: React.FC<SearchInputImgProps> = ({ icon_button,}) => { 
    return (
    <Image src={icon_button} alt="О вас" width={25} height={25} style={{
        width: "auto",
        height: "70px"
    }}/>
   ); 
};

export default function SearchInput() { 
   return (
    
    <div className="flex mb-5 gap-3 flex-col md:flex-row">
      <div className='w-full md:w-3/5'>
        <div className='relative'>
                <input
                    type="text"
                    placeholder="Поиск кейсов"
                    className="pl-10 pr-4 py-2 w-full border-2 border-alt border-solid rounded-md"
                />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image src="/images/icons/search-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
            </div>
            <div className="hover:cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Image src="/images/icons/close-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-3 w-full md:w-2/5'>
        <div className='w-full md:w-2/4'>
          <button className='p-2 w-full bg-alt text-main text-base rounded-md hover:cursor-pointer'>Найти</button>
        </div>
        <div className='flex gap-3 w-2/4'>
          <div className='flex justify-center p-2 w-full rounded-md bg-alt hover:cursor-pointer'>
          <Image src="/images/icons/shuffle.svg" alt="Логотип ITsphera" width={25} height={25} />
          </div>
          <div className='flex justify-center p-2 w-full rounded-md bg-alt hover:cursor-pointer'>
          <Image src="/images/icons/settings.svg" alt="Логотип ITsphera" width={25} height={25} />
          </div>
        </div>
      </div>
    </div>
     
    
  );
}
