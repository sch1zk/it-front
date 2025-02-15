import Image from 'next/image';
import "@/styles/profile.css";
import ProgressBar from '@/components/ui/ProgressBar';
import { MdGroups, MdLightbulb, MdOutlineArrowOutward, MdVisibility, MdWork } from 'react-icons/md';
import ListboxProfile from '@/components/ui/ListboxProfile';

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

        <div className="flex flex-col gap-2 p-5 panel flex-1">
          <a href="" className="inline-flex gap-1 items-center text-primary">
            <span>138 решенных кейсов</span>
            <MdOutlineArrowOutward size={24}/>
          </a>
          <div className="text-primary">
            <p className="text-sm mb-1">Легко</p>
  
            <ProgressBar bgColor="var(--background-color-main)" lineColor="var(--color-primary)" max={341} current={28}/>
          </div>
  
          <div className="text-medium">
            <p className="text-sm mb-1">Средне</p>
  
            <ProgressBar bgColor="var(--background-color-main)" lineColor="var(--color-medium)" max={248} current={43}/>
          </div>
  
          <div className="text-hard">
            <p className="text-sm mb-1">Сложно</p>
  
            <ProgressBar bgColor="var(--background-color-main)" lineColor="var(--color-hard)" max={903} current={67}/>
          </div>
        </div>

        <div className="flex flex-col p-5 panel justify-between">
          <a href="" className="inline-flex gap-1 items-center text-primary">
            <span>Статистика за неделю</span>
            <MdOutlineArrowOutward size={24}/>
          </a>
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

      <div className="flex flex-col p-5 panel w-[400px]">
        <p className="text-primary">Обучение</p>

        <ListboxProfile items={itDirection} label="Основное направление"/>
        <ListboxProfile items={programmingLanguages} label="Выбранные языки" multiple={true}/>

        <p>Использованные языки</p>
      </div>
    </>
  );
}

export default InfoSection;