'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { MdOutlineStar, MdMoreVert, MdThumbUp, MdCheck, MdOutlineStarBorder } from "react-icons/md";
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
interface CaseData {
    id: number;
    title: string;
    difficulty: 'Легко' | 'Средне' | 'Сложно';
    stars: number;
    percentage: string;
    category: string[];
    dateCreated: string;
    views: number;
  }
  
  interface ListallcasesSectionProps {
    sortBy: 'newest' | 'popular' | 'difficult' | string;
  }
  
  const initialCasesData: CaseData[] = [
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
 
  const ListallcasesSection: React.FC<ListallcasesSectionProps> = ({ sortBy }) => {
    const sortedCases = useMemo(() => {
      const casesToSort = [...initialCasesData]; 
  
      switch (sortBy) {
        case "newest":
          return casesToSort.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
        case "popular":
          return casesToSort.sort((a, b) => b.views - a.views);
        case "difficult":
          const difficultyOrder = { Легко: 1, Средне: 2, Сложно: 3 };
          return casesToSort.sort((a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
        default:
          return casesToSort;
      }
    }, [sortBy]);
    const [isStarred, setIsStarred] = useState(false);
  
    const toggleStar = () => {
      setIsStarred(!isStarred);
    };
    const getDifficultyColor = (difficulty: CaseData["difficulty"]) => {
      const colorMap: { [key: string]: string } = {
        'Легко': 'text-primary',
        'Средне': 'text-yellow-500',
        'Сложно': 'text-[#E3595B]',
      };
      return colorMap[difficulty] || 'text-gray-500';
    };

    return (
        <div>
        {sortedCases.map((caseItem) => (
        <div key={caseItem.id} className="p-6 mb-5 rounded-md bg-alt">
            
           <div className='flex justify-between'>
                <div>
                    <span className="text-xl text-main">{caseItem.title}</span>
                </div>
                <div className='flex gap-2 justify-end'>
                  
                      {/* <span className='icon_star2' onClick={toggleStar}>
                          <MdOutlineStar />
                      </span> */}
                
                      <span className='icon_star' onClick={toggleStar}>
                          <MdOutlineStarBorder />
                      </span>
                  
                    <span className='three-dots text-muted'>
                        <MdMoreVert />
                    </span>
                </div>
            </div>


             <div className="w-full">
      
         <div className="mt-2 mb-2">
         <p className={`${getDifficultyColor(caseItem.difficulty)} text-base`}>{caseItem.difficulty}</p>
         </div>
        <div className="flex mb-4 items-center">
         <div className="mr-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 15" fill="none">
           <path d="M15.13 1.465C14.77 0.955 14.17 0.625 13.5 0.625L2.5 0.635C1.4 0.635 0.5 1.525 0.5 2.625V12.625C0.5 13.725 1.4 14.615 2.5 14.615L13.5 14.625C14.17 14.625 14.77 14.295 15.13 13.785L19.5 7.625L15.13 1.465Z" fill="#868686"/>
           </svg>
         </div>
         <div className="mrl-text-cart">
           <span className="px-1 py-0.5 w-full bg-[#1C1C1C] text-muted text-sm rounded-sm">Основы</span>
           <span className="px-1 py-0.5 w-full bg-[#1C1C1C] text-muted text-sm rounded-sm">Алгоритмы</span>
           <span className="px-1 py-0.5 w-full bg-[#1C1C1C] text-muted text-sm rounded-sm">Строки</span>
           <span className="px-1 py-0.5 w-full bg-[#1C1C1C] text-muted text-sm rounded-sm">Массивы</span>
         </div>

        </div>
        <div className="mrl-text-cart-single gap-2 md:gap-px items-baseline md:items-center  justify-between flex flex-col md:flex-row">
            <div className='flex items-center'>
                <span>
                    <Image src="/images/icons/go-cart.svg" alt="Логотип ITsphera" width={40} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/c-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/cpp-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    
                    <span>
                    <Image src="/images/icons/csharp-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/js-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/typeScript-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/kotlin-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/python-cart-icon.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/php-cart.svg" alt="Логотип ITsphera" width={40} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/ruby-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/swift-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                    <span>
                    <Image src="/images/icons/java-cart.svg" alt="Логотип ITsphera" width={20} height={25} />
                    </span>
                 </div>
                  <div className="flex gap-2 text-muted">
                     <div className="flex items-center gap-1"> 
                       <MdOutlineStar />
                       <span className="text-muted">247</span>
                     </div>
                     <div className="flex items-center gap-1"> 
                     <MdThumbUp />
                       <span className="text-muted">95%</span>
                     </div>
                     <div className="flex items-center gap-1"> 
                     <MdCheck />
                       <span className="text-muted">4514</span>
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