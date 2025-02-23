'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

interface CasesImgProps {
    cases_img: string;
    name: string;
    role: string;
    content: string;
}

const CasesImg: React.FC<CasesImgProps> = ({ cases_img,}) => { 
    return (
    <Image src={cases_img} alt="О вас" width={25} height={25} style={{
        width: "auto",
        height: "70px"
    }}/>
   ); 
};
const initialCasesData = [
    {
        id: 1,
        title: "Самые сложные",
        difficulty: "Сложно",
        stars: 247,
        percentage: '95%',
        category: ['Основы', 'Алгоритмы'],
        dateCreated: "2024-01-15",
        views: 120,
    },
    {
        id: 2,
        title: "Сначала новые",
        difficulty: "Легко",
        stars: 123,
        percentage: '75%',
        category: ['Backend', 'Frontend'],
        dateCreated: "2024-02-20",
        views: 250,
    },
];

const ListallcasesSection = ({ sortBy }) => {
    const initialCases = useMemo(() => initialCasesData, []);
    const [sortedCases, setSortedCases] = useState(initialCases);
    const sortCases = useCallback((casesToSort, sortType) => {
        switch (sortType) {
            case "newest":
                return [...casesToSort].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
            case "popular":
                return [...casesToSort].sort((a, b) => b.views - a.views);
            case "difficult":
                const difficultyOrder = { Легко: 1, Средне: 2, Сложно: 3 };
                return [...casesToSort].sort((a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
            default:
                return [...casesToSort];
        }
    }, []);
    useEffect(() => {
        console.log("sortBy prop:", sortBy);
        const newSortedCases = sortCases(initialCases, sortBy);
        setSortedCases(newSortedCases);
    }, [sortBy, initialCases, sortCases]);

    console.log("re-rendering");

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Легко':
                return 'text-green-500';
            case 'Средне':
                return 'text-yellow-500';
            case 'Сложно':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div>
           {sortedCases.map((caseItem) => (
           <div key={caseItem.id} className="p-6 flex mb-5 rounded-md bg-alt">
             <div className="w-1/2">
            <span className="text-2xl text-main">{caseItem.title}</span>
            <div className="mt-2 mb-2">
            <p className={`${getDifficultyColor(caseItem.difficulty)} text-base`}>{caseItem.difficulty}</p>
            </div>
           <div className="flex mb-3 items-center">
            <div className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 15" fill="none">
              <path d="M15.13 1.465C14.77 0.955 14.17 0.625 13.5 0.625L2.5 0.635C1.4 0.635 0.5 1.525 0.5 2.625V12.625C0.5 13.725 1.4 14.615 2.5 14.615L13.5 14.625C14.17 14.625 14.77 14.295 15.13 13.785L19.5 7.625L15.13 1.465Z" fill="#F2F2F2"/>
              </svg>
            </div>
            <div className="mrl-text-cart">
              <span className="p-1 w-full bg-[#1C1C1C] text-main text-sm rounded-md">Основы</span>
              <span className="p-1 w-full bg-[#1C1C1C] text-main text-sm rounded-md">Алгоритмы</span>
              <span className="p-1 w-full bg-[#1C1C1C] text-main text-sm rounded-md">Строки</span>
              <span className="p-1 w-full bg-[#1C1C1C] text-main text-sm rounded-md">Массивы</span>
            </div>
         
           </div>
           <div className="mrl-text-cart-single w-1/2 flex">
                  <span>
                  <Image src="/images/icons/js-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
                  </span>
                  <span>
                  <Image src="/images/icons/js-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
                  </span>
                  <span>
                  <Image src="/images/icons/js-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
                  </span>
                  <span>
                  <Image src="/images/icons/js-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
                  </span>
                  <span>
                  <Image src="/images/icons/js-icon.svg" alt="Логотип ITsphera" width={25} height={25} />
                  </span>
                 </div>
              </div>
              <div className="mrl-text-cart w-1/2 flex flex-col justify-between text-right">
                 <div className='flex gap-3 justify-end'>
                    <span>
                    <Image src="/images/icons/star-icon.svg" alt="Логотип ITsphera" width={30} height={30} />
                    </span>
                    <span>
                     <Image src="/images/icons/bi_three-dots.svg" alt="Логотип ITsphera" width={7} height={7} />
                    </span>
                 </div>
                  <div className='flex justify-end'>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path d="M6.9987 10.4691L11.1187 12.9557L10.0254 8.26906L13.6654 5.11573L8.87203 4.70906L6.9987 0.289062L5.12536 4.70906L0.332031 5.11573L3.97203 8.26906L2.8787 12.9557L6.9987 10.4691Z" fill="#F2F2F2"/>
                          </svg>
                          <span className="text-main">247</span>
                        </div>
                        <div className="flex items-center gap-1"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                          <path d="M0.667969 14.2943H3.33464V6.29427H0.667969V14.2943ZM15.3346 6.96094C15.3346 6.2276 14.7346 5.6276 14.0013 5.6276H9.79463L10.428 2.58094L10.448 2.3676C10.448 2.09427 10.3346 1.84094 10.1546 1.66094L9.44797 0.960938L5.0613 5.35427C4.81464 5.59427 4.66797 5.9276 4.66797 6.29427V12.9609C4.66797 13.6943 5.26797 14.2943 6.0013 14.2943H12.0013C12.5546 14.2943 13.028 13.9609 13.228 13.4809L15.2413 8.78094C15.3013 8.6276 15.3346 8.4676 15.3346 8.29427V6.96094Z" fill="#F2F2F2"/>
                          </svg>
                          <span className="text-main">95%</span>
                        </div>
                        <div className="flex items-center gap-1"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M3.86615 7.22292L1.06615 4.42292L0.132812 5.35625L3.86615 9.08958L11.8661 1.08958L10.9328 0.15625L3.86615 7.22292Z" fill="#F2F2F2"/>
                          </svg>
                          <span className="text-main">4514</span>
                        </div>
                      </div>
                
                  </div>
                 </div>
              </div>
            ))}
        </div>
    );
};

export default ListallcasesSection;
