import Image from 'next/image';
import "@/styles/profile.css";
import CProgressBar from '@/components/ui/CProgressBar';
import { MdAccessTime, MdGroups, MdLabel, MdLightbulb, MdOutlineArrowOutward, MdVisibility, MdWork } from 'react-icons/md';
import CListbox from '@/components/ui/CListbox';

const InfoSection: React.FC = () => {
  const itDirection = [
    { id: 1, name: "Frontend-разработка" },
    { id: 2, name: "Backend-разработка" },
    { id: 3, name: "Data Science" },
    { id: 4, name: "DevOps" },
    { id: 5, name: "Мобильная разработка" }
  ];

  const programmingLanguages = [
    { id: 1, name: "JavaScript"},
    { id: 2, name: "TypeScript"},
    { id: 3, name: "Python"},
    { id: 4, name: "C"},
    { id: 5, name: "C++"},
    { id: 6, name: "C#"},
    { id: 7, name: "Go"},
    { id: 8, name: "Java"},
    { id: 9, name: "HTML"},
    { id: 10, name: "CSS"},
    { id: 11, name: "Rust"},
    { id: 12, name: "PHP"},
    { id: 13, name: "Ruby"},
    { id: 14, name: "Swift"},
    { id: 15, name: "Kotlin"},
  ]

  return (
    <>
      <div className="flex gap-5">

        <div className="inline-flex flex-col items-center justify-center p-5 text-center rounded-lg bg-radial-red">
          <Image src="/images/achievements/rocket.svg" alt="Ракета" width={64} height={64}/>
          <p className="text-lg font-semibold text-primary">5 дней в ударном режиме!</p>
          <p>Твой позвоночник никогда не будет прежним</p>
        </div>

        <div className="inline-flex flex-col items-center justify-center p-5 text-center rounded-lg bg-radial-gold">
          <Image src="/images/achievements/trophy.svg" alt="Ракета" width={64} height={64}/>
          <p className="text-lg font-semibold text-primary">Новое достижение!</p>
          <p>Посмотри, вдруг там что-то важное</p>
        </div>

        <div className="inline-flex flex-col items-center justify-center p-5 text-center rounded-lg bg-radial-purple">
          <Image src="/images/achievements/video-game.svg" alt="Ракета" width={64} height={64}/>
          <p className="text-lg font-semibold text-primary">Последние решенные кейсы</p>
        </div>

      </div>

      <div className="flex gap-5">

        <div className="p-5 panel flex-1">
          <a href="" className="inline-flex gap-1 items-center mb-3 text-primary">
            <span>138 решенных кейсов</span>
            <MdOutlineArrowOutward size={24}/>
          </a>
          <div className="flex flex-col gap-2">
            <div className="text-primary">
              <p className="text-sm mb-1">Легко</p>
    
              <CProgressBar bgColor="var(--background-color-main)" lineColor="var(--color-primary)" max={341} current={28}/>
            </div>
    
            <div className="text-medium">
              <p className="text-sm mb-1">Средне</p>
    
              <CProgressBar bgColor="var(--background-color-main)" lineColor="var(--color-medium)" max={248} current={43}/>
            </div>
    
            <div className="text-hard">
              <p className="text-sm mb-1">Сложно</p>
    
              <CProgressBar bgColor="var(--background-color-main)" lineColor="var(--color-hard)" max={903} current={67}/>
            </div>
          </div>
        </div>

        <div className="p-5 panel flex flex-col">
          <a href="" className="inline-flex gap-1 mb-3 items-center text-primary">
            <span>Статистика за неделю</span>
            <MdOutlineArrowOutward size={24}/>
          </a>
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2 text-sm"><MdVisibility size={24} color="var(--color-primary)"/>Просмотры профиля</div>
              <span>37</span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2 text-sm"><MdLightbulb size={24} color="var(--color-primary)"/>Решенные кейсы</div>
              <span>61</span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2 text-sm"><MdGroups size={24} color="var(--color-primary)"/>Вклад в комьюнити</div>
              <span>15</span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2 text-sm"><MdWork size={24} color="var(--color-primary)"/>Отклики на вакансии</div>
              <span>12</span>
            </div>
          </div>
        </div>

      </div>

      <div className="flex gap-5">
        <div className="p-5 panel min-w-[300px] h-fit">
          <p className="text-primary mb-3">Обучение</p>
  
          <div className="flex flex-col gap-2">
            <CListbox items={itDirection} label="Основное направление"/>
            <CListbox items={programmingLanguages} label="Выбранные языки" multiple={true}/>
  
            <div>
              <span className="text-sm text-primary">Использованные языки</span>
              <div className="flex flex-col gap-2 mt-1">
  
                <div className="flex justify-between">
                  <span className="px-2 bg-panel rounded-sm">C++</span>
                  <span><span className="font-semibold">10</span>{" "}кейсов</span>
                </div>
  
                <div className="flex justify-between">
                  <span className="px-2 bg-panel rounded-sm">Python</span>
                  <span><span className="font-semibold">26</span>{" "}кейсов</span>
                </div>
  
                <div className="flex justify-between">
                  <span className="px-2 bg-panel rounded-sm">JavaScript</span>
                  <span><span className="font-semibold">13</span>{" "}кейсов</span>
                </div>
  
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 panel flex-1 h-full">

          <a href="" className="inline-flex gap-1 mb-3 items-center text-primary">
            <span>История кейсов</span>
            <MdOutlineArrowOutward size={24}/>
          </a>

          <div className="flex flex-col gap-3 h-[300px] scroll-hidden scroll-smooth ">
            <div className="bg-panel rounded-md p-5">
              <p className="flex items-center gap-2 mb-4"><MdAccessTime size={20}/>27 февраля, 2025</p>
              <p>Название кейса</p>
              <div className="flex gap-2 mt-4 items-center text-muted">
                <MdLabel size={20}/>
                <p className="bg-main rounded-sm px-1">Основы</p>
                <p className="bg-main rounded-sm px-1">Алгоритмы</p>
                <p className="bg-main rounded-sm px-1">Строки</p>
                <p className="bg-main rounded-sm px-1">Массивы</p>
              </div>
            </div>

            <div className="bg-panel rounded-md p-5">
              <p className="flex items-center gap-2 mb-4"><MdAccessTime size={20}/>27 февраля, 2025</p>
              <p>Название кейса</p>
              <div className="flex gap-2 mt-4 items-center text-muted">
                <MdLabel size={20}/>
                <p className="bg-main rounded-sm px-1">Основы</p>
                <p className="bg-main rounded-sm px-1">Алгоритмы</p>
                <p className="bg-main rounded-sm px-1">Строки</p>
                <p className="bg-main rounded-sm px-1">Массивы</p>
              </div>
            </div>

            <div className="bg-panel rounded-md p-5">
              <p className="flex items-center gap-2 mb-4"><MdAccessTime size={20}/>27 февраля, 2025</p>
              <p>Название кейса</p>
              <div className="flex gap-2 mt-4 items-center text-muted">
                <MdLabel size={20}/>
                <p className="bg-main rounded-sm px-1">Основы</p>
                <p className="bg-main rounded-sm px-1">Алгоритмы</p>
                <p className="bg-main rounded-sm px-1">Строки</p>
                <p className="bg-main rounded-sm px-1">Массивы</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
}

export default InfoSection;