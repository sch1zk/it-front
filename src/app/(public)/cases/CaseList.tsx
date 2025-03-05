"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCases } from "@/services/api";
import CSearchInput from "@/components/ui/CSearchInput";
import { MdDone, MdFavorite, MdFavoriteBorder, MdLabel, MdMoreVert, MdSettings, MdShuffle, MdThumbUp } from "react-icons/md";
import CListbox from "@/components/ui/CListbox";
import clsx from "clsx";
import Image from "next/image";

interface Case {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  // languages?: string[];
  // topics?: string[];
}

interface Meta {
  total: number;
  page: number;
  limit: number;
}

const cases: Case[] = [
  { id: 1, title: "Оптимизация SQL-запросов", difficulty: "easy" },
  { id: 2, title: "Реализация авторизации на JWT", difficulty: "medium" },
  { id: 3, title: "Разработка REST API на NestJS", difficulty: "hard" },
];

interface CasePanelProps {
  caseItem: Case;
}

const CasePanel: React.FC<CasePanelProps> = ({ caseItem }) => {
  return (
    <Link href={`/cases/${caseItem.id}`}>
      <div className="bg-alt rounded-md flex flex-col gap-2 p-6">
        <div className="flex w-full justify-between">
          <div>
            <p>{caseItem.title}</p>
            <span className={clsx("text-sm", caseItem.difficulty === 'easy' ? 'text-primary' : caseItem.difficulty === 'medium' ? 'text-medium' : 'text-hard')}>
              {caseItem.difficulty === 'easy' ? 'Легко' : caseItem.difficulty === 'medium' ? 'Средне' : 'Трудно'}
            </span>
          </div>

          <div className="flex gap-2.5">
            <MdFavoriteBorder size={24} color="var(--color-primary)"/>
            <button className="overflow-hidden w-4 h-fit">
              <MdMoreVert size={24} className="ml-[-4px]" />
            </button>
            
          </div>

        </div>


        <div className="text-muted flex items-center gap-1">
          <MdLabel size={20}/>
          <span className="bg-main rounded-sm text-sm px-1">
            Основы
          </span>
          <span className="bg-main rounded-sm text-sm px-1">
            Алгоритмы
          </span>
        </div>

        <div className="flex mt-1 justify-between">
          <div className="flex gap-1.5">
            <Image src='/images/icons/langs/go.svg' alt='go' width={80} height={30}/>
            <Image src='/images/icons/langs/c.svg' alt='c' width={30} height={30}/>
            <Image src='/images/icons/langs/cpp.svg' alt='cpp' width={30} height={30}/>
            <Image src='/images/icons/langs/csharp.svg' alt='csharp' width={30} height={30}/>
            <Image src='/images/icons/langs/js.svg' alt='javascript' width={30} height={30}/>
            <Image src='/images/icons/langs/ts.svg' alt='typescript' width={30} height={30}/>
            <Image src='/images/icons/langs/kotlin.svg' alt='kotlin' width={30} height={30}/>
            <Image src='/images/icons/langs/python.svg' alt='python' width={30} height={30}/>
            <Image src='/images/icons/langs/php.svg' alt='php' width={63} height={30}/>
            <Image src='/images/icons/langs/ruby.svg' alt='ruby' width={41} height={30}/>
            <Image src='/images/icons/langs/swift.svg' alt='swift' width={38} height={30}/>
            <Image src='/images/icons/langs/java.svg' alt='java' width={30} height={30}/>
          </div>
          <div className="flex items-end text-sm/4 gap-2.5 text-muted">
            <div className="flex items-center gap-1">
              <MdFavorite size={16}/><span>247</span>
            </div>
            <div className="flex items-center gap-1">
              <MdThumbUp size={16}/><span>95%</span>
            </div>
            <div className="flex items-center gap-1">
              <MdDone size={16}/><span>5429</span>
            </div>
          </div>
        </div>

      </div>
      
    </Link>
  );
}

const CaseList: React.FC = () => {
  const sortDate = [
    { id: 1, name: "Сначала новые" },
    { id: 2, name: "Сначала старые" },
  ];

  const meta = {
    total: 1405,
    page: 1,
    limit: 20,
  }

  // const [cases, setCases] = useState<Case[]>([]);
  // const [meta, setMeta] = useState<Meta | null>(null);

  const [search, setSearch] = useState<string>("");

  const getCasesList = async (page: number = 1, limit: number = 10) => {
    try {
      // const data = await fetchCases(page, limit);
      // setCases(data.cases);
      // setMeta(data.meta);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCasesList(1, 10);
  }, []);

  return (
    <div className="flex flex-col w-full gap-2.5">
      <div className="flex gap-2.5">
        <CSearchInput placeholder="Поиск кейсов" onChange={(e) => setSearch(e.target.value)}/>
        <button className="bg-alt px-16 rounded-md cursor-pointer">
          Найти
        </button>
        <button className="bg-alt w-16 rounded-md cursor-pointer flex justify-center items-center">
          <MdShuffle size={24}/>
        </button>
        <button className="bg-alt w-16 rounded-md cursor-pointer flex justify-center items-center">
          <MdSettings size={24}/>
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <CListbox 
          items={sortDate}
          buttonBackground="bg-alt"
          optionsBackground = "bg-alt"
          buttonClass = "rounded-md py-1.5 w-[150px]"
        />
        {meta && (
          <p className="text-muted">Найдено кейсов: {meta.total}</p>
        )}
      </div>

      <ul className="space-y-2.5">
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            <CasePanel caseItem={caseItem}/>
          </li>
        ))}
      </ul>
      {/* {meta && (
        <div className="flex gap-2.5">
          <p>Page: {meta.page}</p>
          <p>Limit: {meta.limit}</p>
          <p>Total Cases: {meta.total}</p>
        </div>
      )} */}
    </div>
  );
};

export default CaseList;
